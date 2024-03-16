import { Box, Typography } from "@mui/material";
import { List, WeatherData } from "../../types/weather";
import { formatDay } from "../../utils/formatDay";
import { WeatherBox } from "../WeatherBox/WeatherBox";

export const WeatherList: React.FC<{ data: WeatherData }> = async ({
  data,
}) => {
  const groupedDataByDate = data.list.reduce(
    (groups: { [key: string]: List[] }, item) => {
      const date = formatDay(item.dt);
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(item);
      return groups;
    },
    {}
  );

  return (
    <Box data-cy="weather-list">
      <WeatherBox date="Today" list={groupedDataByDate["Today"]} />

      <Typography variant="h5" marginBottom={"8px"}>
        Forecast (5 days)
      </Typography>
      {Object.entries(groupedDataByDate)
        .filter(([date]) => date !== "Today")
        .map(([date, list]) => (
          <WeatherBox key={date} date={date} list={list} />
        ))}
    </Box>
  );
};
