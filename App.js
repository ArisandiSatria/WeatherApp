import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";

import { fetchWeather } from "./components/Api";
import WeatherCard from "./components/Card";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function enterCity(name) {
    setCity(name);
  }

  async function submitWeather() {
    setLoading(true);
    try {
      if (city == "") {
        if (Platform.OS === "android") {
          ToastAndroid.show("Please enter a text", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("Please enter a text");
        }
        setLoading(false);
        return;
      } else {
        const forecast = await fetchWeather(city, setError);
        setWeather(forecast);
        setLoading(false);
      }
    } catch (error) {
      setError("City not found");
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Weather APP</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Input city"
          onChangeText={enterCity}
        />
        <TouchableOpacity style={styles.button} onPress={submitWeather}>
          {loading ? (
            <ActivityIndicator size={26} color="#ddd" />
          ) : (
            <Text style={{ color: "white", fontSize: 16 }}>Cari</Text>
          )}
        </TouchableOpacity>
      </View>
      {!weather ? (
        <WeatherCard weather={null} />
      ) : weather.hasOwnProperty("error") ? (
        <WeatherCard weather={null} />
      ) : (
        <WeatherCard weather={weather} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    paddingVertical: 50,
    fontSize: 32,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    width: "50%",
    padding: 8,
    marginRight: 8,
    borderRadius: 6,
    backgroundColor: "#ddd",
  },
  button: {
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "#2a2a2a",
  },
});
