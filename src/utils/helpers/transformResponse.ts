import { ICurrentWeather, IForecast } from '../types/weather.types';

type transformWeatherResponseType = (response: any) => {
  currentForecast: ICurrentWeather;
  nextForecastsList: IForecast[];
};

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
      maxFurTemperature: item.day.maxtemp_f,
      minFurTemperature: item.day.mintemp_f,
      avgHumidity: item.day.avghumidity,
      avgWindSpeed: item.day.avgvis_km,
      condition: {
        text: item.day.condition.text,
        icon: item.day.condition.icon,
      },
    })
  );

  const currentForecast: ICurrentWeather = {
    celTemperature: currentWeatherResponse.temp_c,
    furTemperature: currentWeatherResponse.temp_f,
    windSpeed: currentWeatherResponse.vis_km,
    humidity: currentWeatherResponse.humidity,
    lastUpdate: currentWeatherResponse.last_updated,
    location: location,
    condition: {
      text: currentWeatherResponse.condition.text,
      icon: currentWeatherResponse.condition.icon,
    },
  };

  const nextForecastsList = transformedWeatherResponse.splice(
    1,
    forecastListResponse.length - 1
  );

  return {
    currentForecast,
    nextForecastsList,
  };
};
