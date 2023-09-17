import { ICurrentWeather, IWeatherData } from '../types/weather.types';

type transformWeatherResponseType = (response: any) => IWeatherData;

export const transformWeatherResponse: transformWeatherResponseType = (
  response: any
) => {
  const currentWeatherResponse = response.current;
  const forecastListResponse = response.forecast.forecastday;
  const location = {
    name: response.location.name,
    country: response.location.country,
  };

  const transformedWeatherResponse = forecastListResponse.map(
    (item: any, index: number) => ({
      dayNumber: index,
      date: item.date,
      maxCelTemperature: item.day.maxtemp_c,
      minCelTemperature: item.day.mintemp_c,
      maxFahTemperature: item.day.maxtemp_f,
      minFahTemperature: item.day.mintemp_f,
      avgHumidity: item.day.avghumidity,
      avgWindSpeed: item.day.maxwind_kph,
      condition: {
        text: item.day.condition.text,
        icon: item.day.condition.icon,
      },
    })
  );

  const currentWeather: ICurrentWeather = {
    celTemperature: currentWeatherResponse.temp_c,
    fahTemperature: currentWeatherResponse.temp_f,
    windSpeed: currentWeatherResponse.wind_kph,
    humidity: currentWeatherResponse.humidity,
    lastUpdate: currentWeatherResponse.last_updated,
    location: location,
    condition: {
      text: currentWeatherResponse.condition.text,
      icon: currentWeatherResponse.condition.icon,
    },
  };

  const forecastList = transformedWeatherResponse.splice(
    1,
    forecastListResponse.length - 1
  );

  return {
    currentWeather,
    forecastList,
  };
};
