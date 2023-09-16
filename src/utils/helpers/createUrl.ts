import { API_KEY, WEATHER_BASE_URL } from '../constants';

export const createUrl = (city: string): string => {
  const baseWeatherUrl = WEATHER_BASE_URL;

  const url = `${baseWeatherUrl}/v1/forecast.json?key=${API_KEY}&q=${city}&days=6&aqi=no&alerts=no`;

  return url;
};
