import { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Pressable,
} from "react-native";
import image from "./assets/tlo.png";
import plus from "./assets/plus.png";

export default function NotPlanner({ navigation }) {
  const mocked = ["nazwa", "nazwa2"];
  const [names, setNames] = useState(mocked);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {names.map((name) => (
          <Pressable
            style={styles.single}
            onPress={() => {
              setNames(names.filter((item) => item !== name));
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              {name}
            </Text>
          </Pressable>
        ))}
      </ImageBackground>
      <Pressable
        style={{
          backgroundColor: "white",
          opacity: 0.5,
          width: 50,
          height: 50,
          position: "absolute",
          bottom: 80,
          right: 20,
          borderRadius: 25,
        }}
        onPress={() => {
          navigation.navigate("Dodaj nietodo", {
            names,
            setNames,
          });
        }}
      >
        <ImageBackground
          style={{ width: 50, height: 50 }}
          source={plus}
        ></ImageBackground>
      </Pressable>
      <Pressable
        style={{
          height: 60,
          justifyContent: "center",
          width: "50%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          opacity: 0.5,
        }}
        onPress={() => {
          navigation.navigate("Planer");
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          To zrobię!
        </Text>
      </Pressable>
      <Pressable
        style={{
          height: 60,
          justifyContent: "center",
          width: "50%",
          position: "absolute",
          bottom: 0,
          right: 0,
          backgroundColor: "white",
          opacity: 0.5,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Nie pić piwa
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    zIndex: -5,
  },
  single: {
    width: "100%",
    height: "8%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    backgroundColor: "white",
    opacity: 0.5,
    justifyContent: "center",
    textAlign: "center",
  },
});
