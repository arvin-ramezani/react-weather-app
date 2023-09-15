export enum TemperatureUnit {
  CEL = 'celsius',
  FUH = 'Fahrenheit',
}

export interface IWeatherData {
  currentWeather: ICurrentWeather;
  forecastList: IForecast[];
}

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
  maxFuhTemperature: number;
  minFuhTemperature: number;
  avgHumidity: number;
  avgWindSpeed: number;
  condition: {
    text: string;
    icon: string;
  };
}
