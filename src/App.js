import axios from "axios";
import { useState, useEffect } from "react";

import { usePosition } from "use-position";
import Weather from "./components/Weather";

export default function App() {
  const [weather, setWeather] = useState();

  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = "5986a7228977d6ca7a71fbd2c1c16f31";
    const lang = navigator.language.split("-")[0];

    try {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch (e) {
      console.log(`Hata: ${e}`);
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <>
      <Weather weather={weather} />
    </>
  );
}
