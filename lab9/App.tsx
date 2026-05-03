import * as Location from "expo-location";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type WeatherData = {
  temperature: number;
  windspeed: number;
  weathercode: number;
};

export default function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  async function getWeather() {
    setLoading(true);

    try {
      const permission = await Location.requestForegroundPermissionsAsync();

      if (permission.status !== "granted") {
        Alert.alert("Permission denied", "Bạn cần cấp quyền vị trí.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

      const response = await fetch(url);
      const data = await response.json();

      setWeather({
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        weathercode: data.current_weather.weathercode,
      });
    } catch (error) {
      Alert.alert("Error", "Không thể lấy dữ liệu thời tiết.");
    } finally {
      setLoading(false);
    }
  }

  function getWeatherIcon(code: number) {
    if (code === 0) return "☀️";
    if (code >= 1 && code <= 3) return "⛅";
    if (code >= 45 && code <= 48) return "🌫️";
    if (code >= 51 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80 && code <= 82) return "🌦️";
    if (code >= 95) return "⛈️";
    return "🌤️";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima</Text>

      <View style={styles.weatherBox}>
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : weather === null ? (
          <>
            <Text style={styles.icon}>🌍</Text>
            <Text style={styles.message}>Bấm nút để lấy thời tiết hiện tại</Text>
          </>
        ) : (
          <>
            <Text style={styles.icon}>{getWeatherIcon(weather.weathercode)}</Text>
            <Text style={styles.temperature}>{weather.temperature}°C</Text>
            <Text style={styles.wind}>Wind: {weather.windspeed} km/h</Text>
          </>
        )}
      </View>

      <Pressable style={styles.button} onPress={getWeather}>
        <Text style={styles.buttonText}>GET WEATHER</Text>
      </Pressable>

      <Text style={styles.watermark}>Tên của bạn - MSSV</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0284c7",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 40,
  },
  weatherBox: {
    height: 260,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 70,
    marginBottom: 20,
  },
  message: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    lineHeight: 32,
  },
  temperature: {
    color: "white",
    fontSize: 72,
    fontWeight: "bold",
  },
  wind: {
    color: "white",
    fontSize: 20,
    marginTop: 8,
  },
  button: {
    backgroundColor: "#075985",
    paddingVertical: 16,
    paddingHorizontal: 34,
    borderRadius: 14,
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