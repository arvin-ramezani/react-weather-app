import { FC } from 'react';

import ForecastItem from '../ForecastItem/ForecastItem';
import { IForecast, TemperatureUnit } from '@/utils/types/weather.types';
import classes from './ForecastList.module.css';

export interface WeatherListProps {
  weatherList: IForecast[];
  tempUnit: TemperatureUnit;
}

const ForecastList: FC<WeatherListProps> = ({ weatherList, tempUnit }) => {
  return (
    <ul className={classes['forecast-list']}>
      {weatherList.map((weather) => (
        <ForecastItem
          key={weather.dayNumber}
          {...weather}
          preferredTempUnit={tempUnit}
        />
      ))}
    </ul>
  );
};

export default ForecastList;
