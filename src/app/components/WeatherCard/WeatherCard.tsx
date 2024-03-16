import { Avatar, Grid, Typography } from "@mui/material";
import { List } from "../../types/weather";
import { formatTime } from "../../utils/formatTime";
import styles from "./WeatherCard.module.css";

export const WeatherCard: React.FC<{ data: List }> = ({ data }) => {
  const maxTemp = Math.floor(data.main.temp_max);
  const minTemp = Math.floor(data.main.temp_min);
  const temperature = Math.floor(data.main.temp);
  const feelsLike = Math.floor(data.main.feels_like);

  return (
    <Grid className={styles.grid} data-testid="weather-card">
      <Grid>
        <Typography variant="h6">{formatTime(data.dt)}</Typography>
      </Grid>
      <Grid>
        <Avatar
          alt={data.weather[0].description}
          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        />
      </Grid>
      <Grid>
        <Typography variant="body1">Temperature: {temperature}°C</Typography>
      </Grid>
      <Grid>
        <Typography variant="body1">Feels like: {feelsLike}°C</Typography>
      </Grid>
      <Grid className={styles.temp}>
        <Typography variant="body1">
          {maxTemp}°C {maxTemp > minTemp ? "↑" : "↓"}
        </Typography>
        <Typography variant="body1">
          {minTemp}°C {minTemp < maxTemp ? "↓" : "↑"}
        </Typography>
      </Grid>
    </Grid>
  );
};
