import { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import image from "./assets/tlo.png";

export default function NotPlannerAdder({ route, navigation }) {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    route.params.setNames([...route.params.names, value]);
    navigation.navigate("NiePlaner");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TextInput
          style={styles.login}
          onChangeText={setValue}
          placeholder="nazwa"
        />
        <Pressable style={styles.button} onPress={pressHandler}>
          <Text style={styles.text}>Dodaj</Text>
        </Pressable>
      </ImageBackground>
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
  login: {
    width: "70%",
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "white",
    opacity: 0.5,
    height: "10%",
    marginLeft: "15%",
    marginRight: "15%",
    marginBottom: "10%",
  },
  button: {
    width: "70%",
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "rgb(60,28,206)",
    height: "10%",
    marginLeft: "15%",
    marginRight: "15%",
    marginBottom: "10%",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
});
