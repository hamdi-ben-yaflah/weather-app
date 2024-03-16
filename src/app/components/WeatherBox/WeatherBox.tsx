import { Box, Typography, Grid } from "@mui/material";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import styles from "./WeatherBox.module.css";
import { List } from "@/app/types/weather";

export const WeatherBox: React.FC<{ date: string; list: List[] }> = ({
  date,
  list,
}) => (
  <Box key={date} className={styles.box} data-testid="weather-box">
    <Typography variant="h5" className={styles.typography}>
      {date}
    </Typography>
    <Box className={styles.innerBox}>
      {list.map((weatherData, index) => (
        <Grid key={index}>
          <WeatherCard data={weatherData} />
        </Grid>
      ))}
    </Box>
  </Box>
);
