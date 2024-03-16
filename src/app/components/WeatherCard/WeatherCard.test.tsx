import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { WeatherCard } from "./WeatherCard";
import { List } from "@/app/types/weather";

describe("WeatherCard", () => {
  const data: List = {
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
  };

  it("renders the time correctly", () => {
    const { getByText } = render(<WeatherCard data={data} />);
    expect(getByText("10:00 AM")).toBeInTheDocument();
  });

  it("renders the weather icon correctly", () => {
    const { getByAltText } = render(<WeatherCard data={data} />);
    const weatherIcon = getByAltText("light rain");
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherIcon).toHaveAttribute(
      "src",
      "http://openweathermap.org/img/w/10d.png"
    );
  });

  it("renders the temperature correctly", () => {
    const { getByText } = render(<WeatherCard data={data} />);
    expect(getByText("Temperature: 8°C")).toBeInTheDocument();
  });

  it("renders the feels like temperature correctly", () => {
    const { getByText } = render(<WeatherCard data={data} />);
    expect(getByText("Feels like: 7°C")).toBeInTheDocument();
  });

  it("renders the max and min temperature correctly", () => {
    const { getByText } = render(<WeatherCard data={data} />);
    expect(getByText("8°C ↑")).toBeInTheDocument();
    expect(getByText("8°C ↓")).toBeInTheDocument();
  });
});
