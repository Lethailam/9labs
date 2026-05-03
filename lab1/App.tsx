import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>I Am Rich</Text>

         <Image source={require("./assets/money.jpg")} style={styles.image} resizeMode="contain" />
         <Text style={styles.watermark}>Lê Thái Lâm - 23IT.B110</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#10074a",
      alignItems: "center",
      justifyContent: "center",
   },
   title: {
      fontSize: 36,
      color: "white",
      fontWeight: "bold",
      marginBottom: 20,
   },
   image: {
      width: 250,
      height: 250,
   },
   watermark: {
      position: "absolute",
      bottom: 20,
      right: 10,
      color: "white",
      fontSize: 12,
      opacity: 0.7,
   },
});