import { Typography } from "@mui/material";
import axios from "axios";
import { WeatherList } from "./components/WeatherList/WeatherList";
import styles from "./page.module.css";
import { WeatherData } from "./types/weather";

export default async function Home() {
  const { data } = await axios.get<WeatherData>(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        appid: process.env.WEATHER_API_KEY,
        q: "Berlin",
        units: "metric",
      },
    }
  );

  return (
    <main className={styles.main}>
      <Typography variant="h4" marginBottom={"8px"}>
        {data.city.name}, {data.city.country}
      </Typography>
      <WeatherList data={data} />
    </main>
  );
}
