import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Text,
  Pressable,
  StatusBar,
} from "react-native";
import image from "./assets/tloapka.png";

export default function App({ navigation }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const pressHandler = () => {
    if (login === "login" && password === "password") {
      navigation.navigate("Home");
    } else setErrorMessage("Zły login lub hasło");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TextInput
          style={styles.login}
          onChangeText={setLogin}
          placeholder="login"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.login}
          onChangeText={setPassword}
          placeholder="hasło"
        />
        <Pressable style={styles.button} onPress={pressHandler}>
          <Text style={styles.text}>Zaloguj</Text>
        </Pressable>
      </ImageBackground>
      <Text>{errorMessage}</Text>
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
