export const API_KEY = import.meta.env.VITE_API_KEY;

export const BASE_WEATHER_URL = import.meta.env.PROD
  ? 'https://api.weatherapi.com'
  : 'http://api.weatherapi.com';
