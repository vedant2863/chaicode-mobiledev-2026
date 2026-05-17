import Home from "@/components/home";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
        <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
