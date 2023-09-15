import { FC, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import SearchForm from '../SearchForm/SearchForm';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ForecastList from '../ForecastList/ForecastList';
import { ICurrentWeather, IForecast } from '@/utils/types/weather.types';
import { transformWeatherResponse } from '@/utils/helpers/transformResponse';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';
import { createUrl } from '@/utils/helpers/createUrl';
import Notification from '@/components/ui/Notification/Notification';
import classes from './Weather.module.css';

const initialCurrentWeather: ICurrentWeather = {
  humidity: 0,
  windSpeed: 0,
  celTemperature: 0,
  furTemperature: 0,
  location: {
    name: '',
    country: '',
  },
  condition: {
    icon: '',
    text: '',
  },
  lastUpdate: '',
};

const Weather: FC = () => {
  const [currentForecast, setCurrentForecast] = useState<ICurrentWeather>(
    initialCurrentWeather
  );

  const [nextForecastsList, setNextForecastsList] = useState<IForecast[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const transformAndSetState = (weatherRes: any) => {
    if (weatherRes.error) {
      setErrorText(weatherRes.error.message);
      return;
    }

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
      .catch((err) => console.log(err, 'catch'))
      .catch((err) => setErrorText(err?.message))
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

      <AnimatePresence>
        {loading && (
          <LoadingSpinner
            key='loadingSpinner'
            show={loading}
          />
        )}

        {!!errorText && (
          <Notification
            key='notification'
            content={errorText}
            show={!!errorText}
            onClose={setErrorText.bind(null, '')}
          />
        )}
      </AnimatePresence>

      <SearchForm onSearch={fetchWeather} />

      <CurrentWeather {...currentForecast} />

      <ForecastList weatherList={nextForecastsList} />
    </section>
  );
};

export default Weather;
