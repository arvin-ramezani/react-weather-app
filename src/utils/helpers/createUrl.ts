import { API_KEY } from '../constants';

export const createUrl = (city: string): string => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=6&aqi=no&alerts=no`;

  return url;
};
