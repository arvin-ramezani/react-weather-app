import { FC } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import classes from './Weather.module.css';

const Weather: FC = () => {
  return (
    <section className={classes.weather}>
      <h1>
        Welcome to <span>WeatherLy</span>
      </h1>

      <SearchForm />

      <CurrentWeather />
    </section>
  );
};

export default Weather;
