import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { WeatherBox } from "./WeatherBox";
import { List } from "@/app/types/weather";

describe("WeatherBox", () => {
  const date = "Tuesday";
  const list: List[] = [
    {
      dt: 1711011600,
      main: {
        temp: 8.42,
        feels_like: 7.75,
        temp_min: 8.42,
        temp_max: 8.42,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1015,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.59, deg: 230, gust: 4.04 },
      visibility: 10000,
      pop: 0.9,
      rain: { "3h": 0.36 },
      sys: { pod: "d" },
      dt_txt: "2024-03-21 09:00:00",
    },
    {
      dt: 1711022400,
      main: {
        temp: 12.15,
        feels_like: 11.43,
        temp_min: 12.15,
        temp_max: 12.15,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1015,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.16, deg: 244, gust: 4.43 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      rain: { "3h": 0.36 },
      dt_txt: "2024-03-21 12:00:00",
    },
  ];

  it("renders the date correctly", () => {
    const { getByText } = render(<WeatherBox date={date} list={list} />);
    expect(getByText(date)).toBeInTheDocument();
  });

  it("renders the WeatherCard component for each weather data", () => {
    const { getAllByTestId } = render(<WeatherBox date={date} list={list} />);
    const weatherCards = getAllByTestId("weather-card");
    expect(weatherCards).toHaveLength(list.length);
  });
});
