import { API_KEY, BASE_WEATHER_URL } from '../constants';

export const createUrl = (city: string): string => {
  const baseWeatherUrl = BASE_WEATHER_URL;

  const url = `${baseWeatherUrl}/v1/forecast.json?key=${API_KEY}&q=${city}&days=6&aqi=no&alerts=no`;

  return url;
};
