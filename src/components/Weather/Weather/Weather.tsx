import { FC, useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import WeatherList from '../WeatherList/WeatherList';
import { IForecast } from '../../../utils/types/weather.types';
import { transformWeatherResponse } from '../../../utils/helpers/transformResponse';
import classes from './Weather.module.css';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';
import { createUrl } from '../../../utils/helpers/createUrl';

const initialForecast: IForecast = {
  avgHumidity: 0,
  avgWindSpeed: 0,
  celAvgTemperature: 0,
  furAvgTemperature: 0,
  condition: {
    icon: '',
    text: '',
  },
  date: new Date().toISOString(),
  dayNumber: 0,
};

const Weather: FC = () => {
  const [currentForecast, setCurrentForecast] =
    useState<IForecast>(initialForecast);

  const [nextForecastsList, setNextForecastsList] = useState<IForecast[]>();
  const [loading, setLoading] = useState(true);

  const transformAndSetState = (weatherRes: any) => {
    if (weatherRes.error) {
      throw new Error(weatherRes.error.message);
    }

    const { currentForecast, nextForecastsList } = transformWeatherResponse(
      weatherRes.forecast.forecastday
    );

    setCurrentForecast(currentForecast);
    setNextForecastsList(nextForecastsList);
  };

  console.log(nextForecastsList, 'asdf');

  const fetchWeather = (city?: string) => {
    const url = createUrl(city || 'London');
    console.log(city, 'city');
    fetch(url)
      .then((res) => res.json())
      .then((data) => transformAndSetState(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <section className={classes.weather}>
      <h1>
        Welcome to <span>WeatherLy</span>
      </h1>

      {loading && <LoadingSpinner />}

      <SearchForm onSearch={fetchWeather} />

      <CurrentWeather {...currentForecast} />

      <WeatherList />
    </section>
  );
};

export default Weather;
