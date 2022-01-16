import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Pressable,
} from "react-native";
import image from "./assets/tlo.png";

export default function Tips() {
  const [tip, setTip] = useState("");
  const tips = [
    {
      tip: "Podczas prania ubrań w pralce, odwróć je na lewą stronę, wtedy przetrwają więcej prań.",
    },
    {
      tip: "Nie kupuj drogich, gotowych posiłków. Przyrządzone samodzielnie potrawy są tańsze i zdrowsze.",
    },
    {
      tip: "Zostań testerem produktów, dzięki czemu będziesz mógł korzystać z nich za darmo.",
    },
    {
      tip: "Nie chodź głodnym do sklepów. Jak jesteś głodny, wszystko wydaje ci się dobre, przez co robisz więcej impulsywnych zakupów.",
    },
    {
      tip: "Zadbaj o zdrowie swoich zębów – szczotkowanie jest tańsze od wizyt u dentysty.",
    },
    {
      tip: "Piecz chleb, ciastka i bułeczki w domu. Jeżeli lubisz pieczenie, możesz zaoszczędzić mnóstwo pieniędzy robiąc te rzeczy samodzielnie.",
    },
    {
      tip: "Szampon lub mydło może sprawiać wrażenie pustego, jednak jeżeli do opakowania dolejesz nieco wody, starczy ci produktu na jeszcze kilka użyć.",
    },
    {
      tip: "Wiele sklepów, ma swoje marki własne, które są zdecydowanie tańsze od produktów znanych producentów, a dorównują im jakością.",
    },
    {
      tip: "Jeżeli zaoszczędziłeś większą kwotę, powinieneś przelać ją na rachunek oszczędnościowy, na czas określony, na kilka lat.",
    },
    {
      tip: "Zrób budżet i planuj zakupy spożywcze, a także inne wydatki z wyprzedzeniem.",
    },
    {
      tip: "Jeżeli któryś z często kupowanych przez ciebie produktów jest obecnie bardzo tani, możesz kupić go na zapas i przechowywać w zamrażarce",
    },
    { tip: "Wypełniaj w całości pralkę czy zmywarkę." },
  ];
  useEffect(() => {
    setTip(tips[Math.floor(Math.random() * tips.length)].tip);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            marginTop: "25%",
            marginBottom: "25%",
            width: "100%",
            height: "50%",
            backgroundColor: "white",
            opacity: 0.5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 30,
              color: "white",
            }}
          >
            {tip}
          </Text>
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
});
