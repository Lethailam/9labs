import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const answers = [
  "YES",
  "NO",
  "MAYBE",
  "ASK AGAIN",
  "DEFINITELY",
  "I DON'T THINK SO",
];

export default function App() {
  const [answer, setAnswer] = useState("ASK ME");

  function changeAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magic 8 Ball</Text>

      <Pressable style={styles.ball} onPress={changeAnswer}>
        <View style={styles.triangle}>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      </Pressable>

      <Text style={styles.hint}>Tap the ball</Text>

      <Text style={styles.watermark}>Le Thai Lam - 23IT.B110</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101820",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
  },
  ball: {
    width: 270,
    height: 270,
    backgroundColor: "black",
    borderRadius: 135,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    borderColor: "#333",
  },
  triangle: {
    width: 140,
    height: 140,
    backgroundColor: "#1d4ed8",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  answer: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  hint: {
    color: "#ccc",
    fontSize: 18,
    marginTop: 30,
  },
  watermark: {
    position: "absolute",
    bottom: 20,
    color: "white",
    opacity: 0.7,
  },
});