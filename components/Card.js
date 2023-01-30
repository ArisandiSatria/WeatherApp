import { Text, View, Image, StyleSheet } from "react-native";

export default function WeatherCard({ weather }) {
  return (
    <>
      <Text style={styles.title}>
        Current weather in {!weather ? "Unknown city" : weather.location.name}
      </Text>
      <View style={styles.result}>
        <View style={styles.top}>
          <View>
            <Text style={styles.city}>
              {!weather ? "-" : weather.location.name}
            </Text>
            <Text style={styles.country}>
              {!weather ? "-" : weather.location.country}
            </Text>
          </View>
          <View>
            <Text style={styles.degree}>
              {!weather ? "-" : weather.current.temp_c}
              °C
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.weather}>
            {!weather ? (
              <Text style={{ color: "white" }}>-</Text>
            ) : (
              <Image
                style={styles.weatherIcon}
                source={{ uri: `https:${weather.current.condition.icon}` }}
              />
            )}
            <Text style={styles.details}>
              {!weather ? "-" : weather.current.condition.text}
            </Text>
          </View>
          <View>
            <Text style={styles.details}>
              Time: {!weather ? "-" : weather.location.localtime.split(" ")[1]}
            </Text>
            <Text style={styles.details}>
              Humidity : {!weather ? "-" : weather.current.humidity}%
            </Text>
            <Text style={styles.details}>
              UV : {!weather ? "-" : weather.current.uv}
            </Text>
            <Text style={styles.details}>
              Feels Like : {!weather ? "-" : weather.current.feelslike_c}
              °C
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  result: {
    width: "90%",
    height: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: "#2a2a2a",
  },
  title: {
    fontSize: 18,
    marginTop: 10,
  },
  city: {
    color: "white",
    fontSize: 24,
  },
  country: {
    color: "white",
  },
  degree: {
    fontSize: 48,
    color: "white",
  },
  top: {
    justifyContent: "space-between",
  },
  bottom: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  details: {
    color: "white",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weather: {
    alignItems: "center",
  },
});
