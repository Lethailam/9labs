import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(60);
  const [age, setAge] = useState(20);

  function calculateBMI() {
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);

    let result = "";
    let message = "";

    if (bmi < 18.5) {
      result = "Underweight";
      message = "Bạn đang hơi gầy.";
    } else if (bmi < 25) {
      result = "Normal";
      message = "Cơ thể của bạn đang bình thường.";
    } else if (bmi < 30) {
      result = "Overweight";
      message = "Bạn đang hơi thừa cân.";
    } else {
      result = "Obese";
      message = "Bạn nên chú ý sức khỏe hơn.";
    }

    Alert.alert("BMI Result", `BMI: ${bmi.toFixed(1)}\n${result}\n${message}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>

      <View style={styles.row}>
        <Pressable
          style={[
            styles.genderCard,
            gender === "male" && styles.selectedCard,
          ]}
          onPress={() => setGender("male")}
        >
          <Text style={styles.genderIcon}>♂</Text>
          <Text style={styles.label}>MALE</Text>
        </Pressable>

        <Pressable
          style={[
            styles.genderCard,
            gender === "female" && styles.selectedCard,
          ]}
          onPress={() => setGender("female")}
        >
          <Text style={styles.genderIcon}>♀</Text>
          <Text style={styles.label}>FEMALE</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>HEIGHT</Text>
        <Text style={styles.value}>{height} cm</Text>

        <Slider
          minimumValue={120}
          maximumValue={220}
          step={1}
          value={height}
          onValueChange={(value) => setHeight(value)}
          minimumTrackTintColor="#e11d48"
          maximumTrackTintColor="#64748b"
          thumbTintColor="#e11d48"
        />
      </View>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.label}>WEIGHT</Text>
          <Text style={styles.value}>{weight}</Text>

          <View style={styles.buttonRow}>
            <Pressable
              style={styles.circleButton}
              onPress={() => setWeight(weight - 1)}
            >
              <Text style={styles.circleText}>-</Text>
            </Pressable>

            <Pressable
              style={styles.circleButton}
              onPress={() => setWeight(weight + 1)}
            >
              <Text style={styles.circleText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.label}>AGE</Text>
          <Text style={styles.value}>{age}</Text>

          <View style={styles.buttonRow}>
            <Pressable
              style={styles.circleButton}
              onPress={() => setAge(age - 1)}
            >
              <Text style={styles.circleText}>-</Text>
            </Pressable>

            <Pressable
              style={styles.circleButton}
              onPress={() => setAge(age + 1)}
            >
              <Text style={styles.circleText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable style={styles.calculateButton} onPress={calculateBMI}>
        <Text style={styles.calculateText}>CALCULATE</Text>
      </Pressable>

      <Text style={styles.watermark}>Lê Thái Lâm - 23IT.B110</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  genderCard: {
    flex: 1,
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: "#334155",
    borderWidth: 2,
    borderColor: "#e11d48",
  },
  smallCard: {
    flex: 1,
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },
  genderIcon: {
    fontSize: 50,
    color: "white",
    marginBottom: 8,
  },
  label: {
    color: "#94a3b8",
    fontSize: 15,
    fontWeight: "bold",
  },
  value: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 12,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  circleButton: {
    width: 44,
    height: 44,
    backgroundColor: "#475569",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  calculateButton: {
    backgroundColor: "#e11d48",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  calculateText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  watermark: {
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
    color: "white",
    opacity: 0.6,
  },
});