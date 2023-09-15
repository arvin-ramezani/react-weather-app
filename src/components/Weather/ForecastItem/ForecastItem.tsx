import { FC } from 'react';

import ShowTemperature from '../ShowTemperature/ShowTemperature';
import ShowHumidity from '../ShowHumidity/ShowHumidity';
import ShowWindSpeed from '../ShowWindSpeed/ShowWindSpeed';
import { IForecast, TemperatureUnit } from '@/utils/types/weather.types';
import classes from './ForecastItem.module.css';

export interface ForecastItemProps extends IForecast {
  preferredTempUnit: TemperatureUnit;
}

const ForecastItem: FC<ForecastItemProps> = ({
  maxCelTemperature,
  minCelTemperature,
  maxFahTemperature,
  minFahTemperature,
  avgHumidity,
  avgWindSpeed,
  date,
  condition: { icon },
  preferredTempUnit,
}) => {
  const dayOfWeek = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
  });

  const isCelsius = preferredTempUnit === TemperatureUnit.CEL;

  const maxTemperature = isCelsius ? maxCelTemperature : maxFahTemperature;
  const minTemperature = isCelsius ? minCelTemperature : minFahTemperature;

  return (
    <li className={classes['forecast-item']}>
      <h4>{dayOfWeek}</h4>

      <div className={classes['temperature-block']}>
        <div>
          <ShowTemperature
            key='maxCelTemp'
            deg={maxTemperature}
            degreeIcon
          />
          <ShowTemperature
            key='minCelTemp'
            deg={minTemperature}
            degreeIcon
          />
        </div>

        <div className={classes['forecast-item-image-wrapper']}>
          <img
            src={icon}
            alt='Forecast Condition Icon'
          />
        </div>
      </div>

      <div className={classes['details-block']}>
        <ShowHumidity humidity={avgHumidity} />

        <ShowWindSpeed windSpeed={avgWindSpeed} />
      </div>
    </li>
  );
};

export default ForecastItem;
