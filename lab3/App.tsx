import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const diceImages: Record<number, any> = {
  1: require("./assets/images/dice1.png"),
  2: require("./assets/images/dice2.png"),
  3: require("./assets/images/dice3.png"),
  4: require("./assets/images/dice4.png"),
  5: require("./assets/images/dice5.png"),
  6: require("./assets/images/dice6.png"),
};

export default function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  function rollDice() {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;

    setDice1(random1);
    setDice2(random2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 Dice Game 🎲</Text>

      <View style={styles.diceContainer}>
        <Pressable onPress={rollDice}>
          <Image source={diceImages[dice1]} style={styles.diceImage} />
        </Pressable>

        <Pressable onPress={rollDice}>
          <Image source={diceImages[dice2]} style={styles.diceImage} />
        </Pressable>
      </View>

      <Pressable style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>ROLL DICE</Text>
      </Pressable>

      <Text style={styles.watermark}>Le Thai Lam - 23IT.B110</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#617053",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: "white",
    marginBottom: 50,
  },
  diceContainer: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 50,
  },
  diceImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#922b21",
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  watermark: {
    position: "absolute",
    bottom: 20,
    color: "white",
    opacity: 0.7,
  },
});