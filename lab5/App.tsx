import { Audio } from "expo-av";
import { Pressable, StyleSheet, Text, View } from "react-native";

const notes = [
  {
    name: "Note 1",
    color: "#ef4444",
    sound: require("./assets/sounds/note1.wav"),
  },
  {
    name: "Note 2",
    color: "#f97316",
    sound: require("./assets/sounds/note2.wav"),
  },
  {
    name: "Note 3",
    color: "#eab308",
    sound: require("./assets/sounds/note3.wav"),
  },
  {
    name: "Note 4",
    color: "#22c55e",
    sound: require("./assets/sounds/note4.wav"),
  },
  {
    name: "Note 5",
    color: "#3b82f6",
    sound: require("./assets/sounds/note5.wav"),
  },
  {
    name: "Note 6",
    color: "#6366f1",
    sound: require("./assets/sounds/note6.wav"),
  },
  {
    name: "Note 7",
    color: "#a855f7",
    sound: require("./assets/sounds/note7.wav"),
  },
];

export default function App() {
  async function playSound(soundFile: any) {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      {notes.map((note, index) => (
        <Pressable
          key={index}
          style={[styles.noteButton, { backgroundColor: note.color }]}
          onPress={() => playSound(note.sound)}
        >
          <Text style={styles.noteText}>{note.name}</Text>
        </Pressable>
      ))}

      <Text style={styles.watermark}>Lê Thái Lâm - 23IT.B110</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noteText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  watermark: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    color: "white",
    opacity: 0.8,
  },
});