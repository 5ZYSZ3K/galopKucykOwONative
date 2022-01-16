import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Pressable,
} from "react-native";
import image from "./assets/tlo.png";
import niebieska from "./assets/niebieska.png";
import rozowa from "./assets/rozowa.png";
import fioletowa from "./assets/fioletowa.png";
import innafioletowa from "./assets/innafioletowa.png";
import ustawienia from "./assets/ustawienia.png";
import tworcy from "./assets/tworcy.png";
import wylogowanie from "./assets/wylogowanie.png";
import logo from "./assets/logo.png";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ImageBackground source={rozowa} style={styles.useless}>
          <Image
            style={{
              width: 200,
              height: 200,
              position: "absolute",
              left: 90,
              top: 80,
            }}
            source={logo}
          />
        </ImageBackground>
        <ImageBackground source={fioletowa} style={styles.tips}>
          <Text
            style={{
              marginLeft: 15,
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
            }}
            onPress={() => {
              navigation.navigate("Porady");
            }}
          >
            PORADY
          </Text>
        </ImageBackground>
        <ImageBackground source={innafioletowa} style={styles.expenses}>
          <Text
            style={{
              marginLeft: 70,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
            }}
            onPress={() => {
              navigation.navigate("Wydatki");
            }}
          >
            WYDATKI
          </Text>
          <Text
            style={{
              marginLeft: 150,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
            }}
            onPress={() => {
              navigation.navigate("Liczniki");
            }}
          >
            LICZNIKI
          </Text>
        </ImageBackground>
        <ImageBackground source={niebieska} style={styles.reminder}>
          <Text
            style={{
              marginLeft: 20,
              marginBottom: 18,
              color: "white",
              fontWeight: "bold",
              fontSize: 22,
            }}
            onPress={() => {
              navigation.navigate("Przypomnienia");
            }}
          >
            PRZYPOMNIENIA
          </Text>
          <Text
            style={{
              marginLeft: 100,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
            }}
            onPress={() => {
              navigation.navigate("Planer");
            }}
          >
            PLANER
          </Text>
        </ImageBackground>
        <ImageBackground source={fioletowa} style={styles.menu}>
          <Image source={ustawienia} />
        </ImageBackground>
        <ImageBackground source={rozowa} style={styles.menu1}>
          <Image style={{ width: 50, height: 50 }} source={tworcy} />
        </ImageBackground>
        <ImageBackground source={rozowa} style={styles.menu2}>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Image
              style={{ width: 35, height: 50, marginLeft: 7 }}
              source={wylogowanie}
            />
          </Pressable>
        </ImageBackground>
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
  reminder: {
    position: "absolute",
    right: -40,
    top: "30%",
    width: 250,
    height: 250,
    borderRadius: 125,
    justifyContent: "center",
  },
  expenses: {
    position: "absolute",
    left: -40,
    top: "55%",
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: "center",
  },
  tips: {
    position: "absolute",
    right: -10,
    top: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
  },
  useless: {
    position: "absolute",
    left: -80,
    top: -80,
    width: 350,
    height: 350,
    borderRadius: 175,
  },
  menu: {
    position: "absolute",
    bottom: -30,
    right: -10,
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  menu1: {
    position: "absolute",
    bottom: 160,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  menu2: {
    position: "absolute",
    bottom: 100,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
