import { FC } from 'react';

import ForecastItem from '../ForecastItem/ForecastItem';
import { IForecast } from '@/utils/types/weather.types';
import classes from './ForecastList.module.css';

export interface WeatherListProps {
  weatherList: IForecast[];
}

const ForecastList: FC<WeatherListProps> = ({ weatherList }) => {
  return (
    <ul className={classes['forecast-list']}>
      {weatherList.map((weather) => (
        <ForecastItem
          key={weather.dayNumber}
          {...weather}
        />
      ))}
    </ul>
  );
};

export default ForecastList;
