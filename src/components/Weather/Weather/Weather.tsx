import { FC, useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import WeatherList from '../WeatherList/WeatherList';
import { IForecast } from '../../../utils/types/weather.types';
import { transformWeatherResponse } from '../../../utils/helpers/transformResponse';
import { WEATHER_API_URL } from '../../../utils/constants';
import classes from './Weather.module.css';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';

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
    const { currentForecast, nextForecastsList } = transformWeatherResponse(
      weatherRes.forecast.forecastday
    );

    setCurrentForecast(currentForecast);
    setNextForecastsList(nextForecastsList);
  };

  console.log(currentForecast, nextForecastsList, 'asdf');

  useEffect(() => {
    const getWeather = () => {
      fetch(WEATHER_API_URL)
        .then((res) => res.json())
        .then((data) => transformAndSetState(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    };

    getWeather();
  }, []);

  return (
    <section className={classes.weather}>
      <h1>
        Welcome to <span>WeatherLy</span>
      </h1>

      {loading && <LoadingSpinner />}

      <SearchForm />

      <CurrentWeather {...currentForecast} />

      <WeatherList />
    </section>
  );
};

export default Weather;
