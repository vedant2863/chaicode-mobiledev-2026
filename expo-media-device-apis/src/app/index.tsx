import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import * as MediaLibrary from 'expo-media-library';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, ScrollView, StyleSheet } from 'react-native';

const PAGE_SIZE = 2;

export default function PaginatedGalleryScreen() {
  const [permission] = MediaLibrary.usePermissions();
  const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageCursors, setPageCursors] = useState<(string | undefined)[]>([undefined]);
  const [loading, setLoading] = useState(false);

  const loadPage = useCallback(
    async (targetPage: number) => {
      setLoading(true);
      try {
        let cursors = [...pageCursors];

        while (cursors.length < targetPage) {
          const result = await MediaLibrary.getAssetsAsync({
            first: PAGE_SIZE,
            after: cursors[cursors.length - 1],
            mediaType: MediaLibrary.MediaType.photo,
            sortBy: [[MediaLibrary.SortBy.creationTime, false]],
          });

          cursors = [...cursors, result.endCursor];
          if (!result.hasNextPage) {
            break;
          }
        }

        const result = await MediaLibrary.getAssetsAsync({
          first: PAGE_SIZE,
          after: targetPage === 1 ? undefined : cursors[targetPage - 1],
          mediaType: MediaLibrary.MediaType.photo,
          sortBy: [[MediaLibrary.SortBy.creationTime, false]],
        });

        setPageCursors(cursors);
        setAssets(result.assets);
        setTotalPages(Math.max(1, Math.ceil(result.totalCount / PAGE_SIZE)));
        setCurrentPage(targetPage);
      } finally {
        setLoading(false);
      }
    },
    [pageCursors],
  );

  useEffect(() => {
    if (permission?.granted) {
      loadPage(1);
    }
  }, [permission?.granted]);

  if (!permission?.granted) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText>Grant media library access first.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={assets}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.thumbnail} contentFit="cover" />
        )}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator style={styles.loader} />
          ) : (
            <ThemedText style={styles.emptyText}>No photos found.</ThemedText>
          )
        }
      />

      <ThemedView style={styles.pagination}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.pageRow}>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
            const isActive = page === currentPage;

            return (
              <Pressable
                key={page}
                onPress={() => loadPage(page)}
                disabled={loading || isActive}
                style={({ pressed }) => [styles.pageButton, isActive && styles.pageButtonActive, pressed && !isActive && styles.pageButtonPressed]}>
                <ThemedText type="small" themeColor={isActive ? 'background' : 'text'}>
                  {page}
                </ThemedText>
              </Pressable>
            );
          })}
        </ScrollView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  columnWrapper: {
    gap: 4,
  },
  listContent: {
    gap: 4,
    paddingBottom: 8,
    flexGrow: 1,
  },
  thumbnail: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 4,
  },
  loader: {
    marginTop: 24,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
  },
  pagination: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#8884',
    paddingTop: 12,
  },
  pageRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 4,
  },
  pageButton: {
    minWidth: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#8886',
  },
  pageButtonActive: {
    backgroundColor: '#208AEF',
    borderColor: '#208AEF',
  },
  pageButtonPressed: {
    opacity: 0.7,
  },
});
