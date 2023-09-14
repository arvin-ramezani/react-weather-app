export interface ICurrentWeather {
  lastUpdate: string;
  celTemperature: number;
  furTemperature: number;
  humidity: number;
  windSpeed: number;
  location: {
    name: string;
    country: string;
  };
  condition: {
    text: string;
    icon: string;
  };
}

export interface IForecast {
  dayNumber: number;
  date: string;
  maxCelTemperature: number;
  minCelTemperature: number;
  maxFurTemperature: number;
  minFurTemperature: number;
  avgHumidity: number;
  avgWindSpeed: number;
  condition: {
    text: string;
    icon: string;
  };
}
