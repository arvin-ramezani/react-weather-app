export const API_KEY = import.meta.env.VITE_API_KEY;

export const WEATHER_API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=5&aqi=no&alerts=no`;
