import { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import image from "./assets/tlo.png";
import plus from "./assets/plus.png";

export default function Reminders({ navigation }) {
  const mocked = [
    { value: "Weź leki", date: "2022-01", repeat: "1", time: "7:00", id: 1 },
  ];
  const [reminders, setReminders] = useState(mocked);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.background}>
          {reminders.map((data) => (
            <View key={data.id} style={styles.single}>
              <Text style={styles.text1}>{data.value}</Text>
              <Text style={styles.text2}>
                {data.repeat === 0 ? data.date : `Od ${data.date}`}
              </Text>
              <Text style={styles.text3}>{data.time}</Text>
              <Text style={styles.text4}>
                {data.repeat === "1" ? "codziennie" : `co ${data.repeat} dni`}
              </Text>
            </View>
          ))}
          <Pressable
            style={{
              backgroundColor: "white",
              opacity: 1,
              width: 50,
              height: 50,
              position: "absolute",
              bottom: 20,
              right: 20,
              borderRadius: 25,
            }}
            onPress={() => {
              navigation.navigate("Dodaj przypomnienie", {
                reminders,
                setReminders,
              });
            }}
          >
            <ImageBackground
              style={{ width: 50, height: 50 }}
              source={plus}
            ></ImageBackground>
          </Pressable>
        </View>
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
  background: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.5,
  },
  single: {
    height: "15%",
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  text1: {
    fontSize: 25,
    position: "absolute",
    left: 30,
    top: 10,
    color: "white",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 25,
    position: "absolute",
    left: 30,
    bottom: 10,
    color: "white",
    fontWeight: "bold",
  },
  text3: {
    fontSize: 25,
    position: "absolute",
    right: 30,
    top: 10,
    color: "white",
    fontWeight: "bold",
  },
  text4: {
    fontSize: 25,
    position: "absolute",
    right: 30,
    bottom: 10,
    color: "white",
    fontWeight: "bold",
  },
});
