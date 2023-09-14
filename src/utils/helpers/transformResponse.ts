import { IForecast } from '../types/weather.types';

type transformWeatherResponseType = (response: any[]) => {
  currentForecast: IForecast;
  nextForecastsList: IForecast[];
};

export const transformWeatherResponse: transformWeatherResponseType = (
  response: any
) => {
  if (!Array.isArray(response)) {
    throw new Error(
      `This function expect an array as argument but got ${typeof response}`
    );
  }

  const transformedWeatherResponse = response.map(
    (item: any, index: number) => ({
      dayNumber: index,
      date: item.date,
      celAvgTemperature: item.day.avgtemp_c,
      furAvgTemperature: item.day.avgtemp_f,
      avgHumidity: item.day.avghumidity,
      avgWindSpeed: item.day.avgvis_km,
      condition: {
        text: item.day.condition.text,
        icon: item.day.condition.icon,
      },
    })
  );

  const [currentForecast] = transformedWeatherResponse.splice(0, 1);

  return {
    currentForecast,
    nextForecastsList: transformedWeatherResponse,
  };
};
