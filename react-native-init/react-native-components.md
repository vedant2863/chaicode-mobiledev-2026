// import { useState } from "react";
// import { Image, Pressable, Text, TextInput, View } from "react-native";

// export default function HomeScreen() {
// const [name, setName] = useState("");
// return (
// <View>
// <Text numberOfLines={2}>
// oribus autem officia provident fugit consequuntur. Cum, suscipit!
// </Text>

// {/_ Remote image from internet _/}
// {/_ <Image
// source={{
//           uri: "https://chaicode.com/assets/hitesh-suraj-dark-CKHA9jfT.webp",
//         }}
// width={200}
// height={200}
// /> _/}

// {/_ Local image _/}
// <Image
// source={require("@/assets/images/icon.png")}
// style={{
//           height: 100,
//           width: 100,
//         }}
// blurRadius={30}
// />

// <TextInput
// placeholder="enter your name"
// value={name}
// onChangeText={setName}
// placeholderTextColor={"blue"}
// style={{
//           borderWidth: 1,
//           borderColor: "#ddd",
//           marginTop: 10,
//           fontSize: 24,
//         }}
// />

// <Pressable
// onPress={() => alert("Button Pressed")}
// style={({ pressed }) => ({
// backgroundColor: pressed ? "#4a42d4" : "#6C63FF",
// })}
// hitSlop={{
//           top: 10,
//           bottom: 10,
//           left: 20,
//           right: 20,
//         }}
// >
// {({ pressed }) =>
// pressed ? <Text>Presssing...</Text> : <Text>Press me</Text>
// }
// </Pressable>
// </View>
// );
// }
