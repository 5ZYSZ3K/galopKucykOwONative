import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import image from "./assets/tlo.png";

export default function Meters() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    zIndex: -5,
  },
});
