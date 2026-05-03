import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const story: any = {
  start: {
    text: "Bạn đang đi trên một con đường vắng vào ban đêm. Phía trước có một chiếc xe màu đen đang mở cửa.",
    choices: [
      {
        text: "Lại gần chiếc xe",
        next: "car",
      },
      {
        text: "Bỏ đi thật nhanh",
        next: "home",
      },
    ],
  },
  car: {
    text: "Bên trong xe có một chiếc hộp phát sáng. Bạn nghe thấy tiếng thì thầm phát ra từ chiếc hộp.",
    choices: [
      {
        text: "Mở chiếc hộp",
        next: "box",
      },
      {
        text: "Gọi cảnh sát",
        next: "police",
      },
    ],
  },
  home: {
    text: "Bạn chạy về nhà an toàn. Nhưng sáng hôm sau, chiếc xe đó lại xuất hiện trước cửa nhà bạn.",
    choices: [
      {
        text: "Chơi lại",
        next: "start",
      },
    ],
  },
  box: {
    text: "Chiếc hộp mở ra và đưa bạn đến một thế giới khác. Bạn trở thành người khám phá vũ trụ mới.",
    choices: [
      {
        text: "Chơi lại",
        next: "start",
      },
    ],
  },
  police: {
    text: "Cảnh sát đến và phát hiện đây là một vụ án bí mật. Bạn trở thành nhân chứng quan trọng.",
    choices: [
      {
        text: "Chơi lại",
        next: "start",
      },
    ],
  },
};

export default function App() {
  const [currentNode, setCurrentNode] = useState("start");
  const node = story[currentNode];

  return (
    <ImageBackground
      source={require("./assets/images/story-bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Destini</Text>

          <View style={styles.storyBox}>
            <Text style={styles.storyText}>{node.text}</Text>
          </View>

          {node.choices.map((choice: any, index: number) => (
            <Pressable
              key={index}
              style={[
                styles.choiceButton,
                index === 0 ? styles.choiceButtonPrimary : styles.choiceButtonSecondary,
              ]}
              onPress={() => setCurrentNode(choice.next)}
            >
              <Text style={styles.choiceText}>{choice.text}</Text>
            </Pressable>
          ))}

          <Text style={styles.watermark}>Le Thai Lam - 23IT.B110</Text>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(5, 8, 20, 0.45)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  title: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 32,
    textShadowColor: "rgba(0,0,0,0.65)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  storyBox: {
    backgroundColor: "rgba(15, 23, 42, 0.68)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    borderRadius: 20,
    padding: 22,
    marginBottom: 24,
    minHeight: 220,
    justifyContent: "center",
  },
  storyText: {
    color: "white",
    fontSize: 22,
    lineHeight: 34,
    textAlign: "center",
    fontWeight: "600",
    textShadowColor: "rgba(0,0,0,0.55)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  choiceButton: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 14,
  },
  choiceButtonPrimary: {
    backgroundColor: "rgba(79, 70, 229, 0.88)",
  },
  choiceButtonSecondary: {
    backgroundColor: "rgba(147, 51, 234, 0.88)",
  },
  choiceText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  watermark: {
    marginTop: 10,
    textAlign: "center",
    color: "white",
    opacity: 0.75,
    fontSize: 13,
  },
});