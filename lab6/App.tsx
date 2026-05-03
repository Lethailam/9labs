import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const questions = [
  {
    question: "React Native dùng JavaScript hoặc TypeScript.",
    answer: true,
  },
  {
    question: "React Native chỉ chạy được trên Android.",
    answer: false,
  },
  {
    question: "useState dùng để quản lý dữ liệu thay đổi.",
    answer: true,
  },
  {
    question: "View trong React Native tương tự div trong HTML.",
    answer: true,
  },
  {
    question: "Text có thể viết trực tiếp ngoài View.",
    answer: false,
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[index];

  function checkAnswer(userAnswer: boolean) {
    let newScore = score;

    if (userAnswer === currentQuestion.answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      Alert.alert(
        "Hoàn thành",
        `Bạn đạt ${newScore}/${questions.length} điểm`,
        [
          {
            text: "Làm lại",
            onPress: () => {
              setIndex(0);
              setScore(0);
            },
          },
        ]
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzler</Text>

      <Text style={styles.progress}>
        Question {index + 1}/{questions.length}
      </Text>

      <Text style={styles.score}>Score: {score}</Text>

      <View style={styles.questionBox}>
        <Text style={styles.question}>{currentQuestion.question}</Text>
      </View>

      <Pressable
        style={[styles.button, styles.trueButton]}
        onPress={() => checkAnswer(true)}
      >
        <Text style={styles.buttonText}>TRUE</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.falseButton]}
        onPress={() => checkAnswer(false)}
      >
        <Text style={styles.buttonText}>FALSE</Text>
      </Pressable>

      <Text style={styles.watermark}>Lê Thái Lâm - 23IT.B110</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f2937",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  progress: {
    color: "#d1d5db",
    textAlign: "center",
    fontSize: 16,
  },
  score: {
    color: "#facc15",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 40,
  },
  questionBox: {
    minHeight: 180,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  question: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 36,
  },
  button: {
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  trueButton: {
    backgroundColor: "#22c55e",
  },
  falseButton: {
    backgroundColor: "#ef4444",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  watermark: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    color: "white",
    opacity: 0.7,
  },
});