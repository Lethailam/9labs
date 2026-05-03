import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Le Thai lam</Text>
      <Text style={styles.job}>REACT NATIVE DEVELOPER</Text>

      <View style={styles.line} />

      <View style={styles.card}>
        <Text style={styles.icon}>☎</Text>
        <Text style={styles.cardText}>+84 17 011 246</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>✉</Text>
        <Text style={styles.cardText}>lamlt.23itb@vku.udn.vn</Text>
      </View>

      <Text style={styles.watermark}>Lê Thái Lâm - 23IT.B110</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2bb3a3",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "white",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  job: {
    fontSize: 15,
    color: "#d1faf3",
    marginTop: 8,
    letterSpacing: 2,
    fontWeight: "bold",
  },
  line: {
    width: 160,
    height: 1,
    backgroundColor: "#d1faf3",
    marginVertical: 28,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 22,
    marginRight: 16,
    color: "#2bb3a3",
  },
  cardText: {
    fontSize: 18,
    color: "#176b61",
    fontWeight: "600",
  },
  watermark: {
    position: "absolute",
    bottom: 20,
    color: "white",
    opacity: 0.7,
  },
});