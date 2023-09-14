import { FC } from 'react';

import ShowTemperature from '../ShowTemperature/ShowTemperature';
import ShowHumidity from '../ShowHumidity/ShowHumidity';
import ShowWindSpeed from '../ShowWindSpeed/ShowWindSpeed';
import { IForecast } from '@/utils/types/weather.types';
import classes from './ForecastItem.module.css';

const ForecastItem: FC<IForecast> = ({
  // celAvgTemperature,
  // furAvgTemperature,
  maxCelTemperature,
  minCelTemperature,
  // highFurTemperature,
  // lowFurTemperature,
  avgHumidity,
  avgWindSpeed,
  date,
  condition: {
    // text,
    icon,
  },
}) => {
  const dayOfWeek = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
  });

  return (
    <li className={classes['forecast-item']}>
      <h4>{dayOfWeek}</h4>

      <div className={classes['temperature-block']}>
        <div>
          <ShowTemperature
            key='maxCelTemp'
            deg={maxCelTemperature}
            degreeIcon
          />
          <ShowTemperature
            key='minCelTemp'
            deg={minCelTemperature}
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
