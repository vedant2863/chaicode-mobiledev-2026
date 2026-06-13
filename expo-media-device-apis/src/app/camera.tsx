import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import {
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
  type BarcodeScanningResult,
} from "expo-camera";
import React, { useRef, useState } from "react";
import { Button, StyleSheet } from "react-native";

const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const cameraRef = useRef<CameraView>(null);
  const lastScanned = useRef<string | null>(null);
  const [ready, setReady] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState<BarcodeScanningResult | null>(null);

  if (!permission) {
    return <ThemedText>Loading Permissions...</ThemedText>;
  }

  if (!permission.granted) {
    return (
      <ThemedView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
        <ThemedText style={{ marginBottom: 16 }}>
          We need camera access to take photos.
        </ThemedText>
        <Button title="Grant camera access" onPress={requestPermission} />
      </ThemedView>
    );
  }

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync({ quality: 1 });
    if (photo?.uri) setPhotoUri(photo.uri);
  };

  const startRecording = async () => {
    if (!micPermission?.granted) {
      const result = await requestMicPermission();
      if (!result?.granted) return;
    }

    setRecording(true);
    const video = await cameraRef.current?.recordAsync({ maxDuration: 15 });
    setVideoUri(video?.uri ?? null);
    setRecording(false);
  };

  const stopRecording = () => {
    cameraRef.current?.stopRecording();
  };

  const onBarcodeScanned = (scan: BarcodeScanningResult) => {
    if (lastScanned.current === scan.data) return;
    lastScanned.current = scan.data;
    setResult(scan);
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={onBarcodeScanned}
        onCameraReady={() => setReady(true)}
        onMountError={({ message }) => console.warn(message)}
      />

      <Button
        title={recording ? "stop" : "record"}
        disabled={!ready}
        onPress={recording ? stopRecording : startRecording}
      />

      {videoUri && <ThemedText selectable>{videoUri}</ThemedText>}

      {/* <Button title="Take photo" onPress={takePhoto} disabled={!ready} />
      {photoUri && (
        <Image
          source={{ uri: photoUri }}
          style={{ height: 200 }}
          contentFit="cover"
        />
      )} */}
      <ThemedText style={{ padding: 12 }}>
        {ready ? "Camera ready" : "Starting camera…"}
      </ThemedText>
    </ThemedView>
  );
};
export default Camera;

const styles = StyleSheet.create({});
