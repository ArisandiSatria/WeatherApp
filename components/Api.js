export async function fetchWeather(city, setError) {
  const url = `http://api.weatherapi.com/v1/current.json?key=3d35822e80cb4945bbf65441232801&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    setError("");
    return data;
  } catch (err) {
    setError("Failed to fetch from API");
    return err;
  }
}
