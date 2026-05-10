# React Native Components Reference

## 1. Basic Components (Text, Image, View)

Example showing how to use Text, Image (local and remote), and basic View layouts:

```jsx
// import { useState } from "react";
// import { Image, Pressable, Text, TextInput, View } from "react-native";

// export default function HomeScreen() {
// const [name, setName] = useState("");
// return (
// <View>
// <Text numberOfLines={2}>
// oribus autem officia provident fugit consequuntur. Cum, suscipit!
// </Text>

// Remote image from internet
// <Image
// source={{
//   uri: "https://chaicode.com/assets/hitesh-suraj-dark-CKHA9jfT.webp",
// }}
// width={200}
// height={200}
// />

// Local image
// <Image
// source={require("@/assets/images/icon.png")}
// style={{
//   height: 100,
//   width: 100,
// }}
// blurRadius={30}
// />
// </View>
// );
// }
```

---

## 2. Form Components (TextInput, Button, Switch)

Example showing how to use TextInput, Button, and Switch components:

```jsx
import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

// TextInput Example
const TextInputExample = () => {
  const [name, setName] = useState("");
  return (
    <TextInput
      placeholder="enter your name"
      value={name}
      onChangeText={setName}
      placeholderTextColor={"blue"}
      style={{
        borderWidth: 1,
        borderColor: "#ddd",
        marginTop: 10,
        fontSize: 24,
      }}
    />
  );
};

// Pressable/Button Example
const ButtonExample = () => {
  return (
    <Pressable
      onPress={() => alert("Button Pressed")}
      style={({ pressed }) => ({
        backgroundColor: pressed ? "#4a42d4" : "#6C63FF",
      })}
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 20,
        right: 20,
      }}
    >
      {({ pressed }) =>
        pressed ? <Text>Pressing...</Text> : <Text>Press me</Text>
      }
    </Pressable>
  );
};
```

---

## 3. ScrollView with List Items

Example showing how to use ScrollView to display multiple items with styling:

```jsx
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

const ScrollViewExample = () => {
  const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: 16,
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text style={{ fontSize: 16 }}>{item}</Text>
        </View>
      ))}

      <Button
        title="Hello i am button"
        color={"green"}
        onPress={() => alert("Hello world")}
      />
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "#ddd", true: "#6c63ff" }}
        thumbColor={"yellow"}
      />
    </ScrollView>
  );
};

export default ScrollViewExample;

const styles = StyleSheet.create({});
```

---

## 4. FlatList with Data

Example showing how to use FlatList to render a list of items:

```jsx
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const USERS = [
  { id: "1", name: "Alice Johnson", role: "Designer" },
  { id: "2", name: "Bob Smith", role: "Developer" },
  { id: "3", name: "Carol White", role: "Manager" },
  { id: "4", name: "David Brown", role: "Developer" },
  { id: "5", name: "Eve Davis", role: "Designer" },
];

const FlatListExample = () => {
  return (
    <FlatList
      style={{
        backgroundColor: "red",
      }}
      data={USERS}
      horizontal
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16, backgroundColor: "green" }}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "black" }} />
      )}
    />
  );
};

export default FlatListExample;

const styles = StyleSheet.create({});
```

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function UnsafeScreen() {
return (
<View style={{ flex: 1, backgroundColor: "#1c1c1e" }}>
<Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
Header (bleeds under notch!)
</Text>
<Text style={{ color: "#aaa", padding: 16 }}>
This content might be hidden behind the status bar in dark mode.
</Text>
</View>
);
}

function SafeScreen() {
return (
<SafeAreaView
edges={["bottom", "top"]}
style={{ flex: 1, backgroundColor: "#1c1c1e" }} >
<Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
Header (safely below notch ✅)
</Text>
<Text style={{ color: "#aaa", padding: 16 }}>
This content respects the safe area on all devices.
</Text>
</SafeAreaView>
);
}

const index = () => {
return (
<>
<SafeScreen />
{/_ <UnsafeScreen /> _/}
</>
);
};

export default index;

const styles = StyleSheet.create({});

import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
const insets = useSafeAreaInsets();

console.log(insets);
return (
<View
style={{
        flex: 1,
        paddingTop: insets.top - 12,
        paddingBottom: insets.bottom,
      }} >
<StatusBar barStyle={"dark-content"} />
<Text>HomeScreen</Text>
</View>
);
};

export default HomeScreen;

const styles = StyleSheet.create({});
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
return (
<SafeAreaView>
<View style={styles.card}>
<StatusBar style="dark" />
<Text style={styles.title}>HomeScreen</Text>
<Text style={styles.subtitle}>hello</Text>
</View>
</SafeAreaView>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
card: {
backgroundColor: "white",
borderRadius: 16,
padding: 20,
margin: 16,
elevation: 4,
shadowColor: "#000",
shadowOpacity: 0.1,
shadowRadius: 8,
},
title: {
fontSize: 20,
fontWeight: "bold",
color: "#333",
},
subtitle: {
fontSize: 14,
color: "#888",
marginTop: 4,
},
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
const isActive = true;

const buttonStyle = StyleSheet.compose(
styles.button,
isActive ? styles.activeButton : null,
);

return (
<View style={styles.container}>
{/_ @ts-ignore _/}
<View style={buttonStyle}>
<Text style={styles.buttonText}>Composed Style</Text>
</View>
</View>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center" },
button: {
paddingVertical: 12,
paddingHorizontal: 32,
borderRadius: 10,
backgroundColor: "#ccc", // Default grey
},
activeButton: {
backgroundColor: "#6C63FF", // Override to purple when active
},
buttonText: {
color: "white",
fontWeight: "bold",
fontSize: 16,
},
});

import React from "react";
import { StyleSheet, Text } from "react-native";

const styleA = StyleSheet.create({ text: { color: "red", fontSize: 16 } });
const styleB = StyleSheet.create({
text: { fontSize: 24, fontWeight: "bold" },
});

const flat = StyleSheet.flatten([styleA.text, styleB.text]);

const HomeScreen = () => {
return <Text style={flat}>Flattened Style!</Text>;
};

export default HomeScreen;
