import { FC } from 'react';

import WeatherItem from '../WeatherItem/WeatherItem';
import classes from './WeatherList.module.css';

const WeatherList: FC = () => {
  return (
    <ul className={classes['weather-list']}>
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
    </ul>
  );
};

export default WeatherList;
