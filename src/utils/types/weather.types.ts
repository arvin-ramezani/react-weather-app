export enum TemperatureUnit {
  CEL = 'celsius',
  FAH = 'fahrenheit',
}

export interface IWeatherData {
  currentWeather: ICurrentWeather;
  forecastList: IForecast[];
}

export interface ICurrentWeather {
  lastUpdate: string;
  celTemperature: number;
  fahTemperature: number;
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
  maxFahTemperature: number;
  minFahTemperature: number;
  avgHumidity: number;
  avgWindSpeed: number;
  condition: {
    text: string;
    icon: string;
  };
}
