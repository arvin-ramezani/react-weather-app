import { FC, useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ForecastList from '../ForecastList/ForecastList';
import { ICurrentWeather, IForecast } from '../../../utils/types/weather.types';
import { transformWeatherResponse } from '../../../utils/helpers/transformResponse';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';
import { createUrl } from '../../../utils/helpers/createUrl';
import classes from './Weather.module.css';

const initialForecast: ICurrentWeather = {
  humidity: 0,
  windSpeed: 0,
  celTemperature: 0,
  furTemperature: 0,
  condition: {
    icon: '',
    text: '',
  },
  lastUpdate: '',
};

const Weather: FC = () => {
  const [currentForecast, setCurrentForecast] =
    useState<ICurrentWeather>(initialForecast);

  const [nextForecastsList, setNextForecastsList] = useState<IForecast[]>([]);
  const [loading, setLoading] = useState(true);

  const transformAndSetState = (weatherRes: any) => {
    if (weatherRes.error) {
      throw new Error(weatherRes.error.message);
    }

    console.log(weatherRes);

    const { currentForecast, nextForecastsList } =
      transformWeatherResponse(weatherRes);

    setCurrentForecast(currentForecast);
    setNextForecastsList(nextForecastsList);
  };

  const fetchWeather = (city?: string) => {
    const url = createUrl(city || 'London');
    setLoading(true);
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

      <ForecastList weatherList={nextForecastsList} />
    </section>
  );
};

export default Weather;
