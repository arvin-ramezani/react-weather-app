import { FC } from 'react';

import WeatherIconPlaceHolder from '../../../assets/icons/sunny-icon.png';
import ShowTemperature from '../ShowTemperature/ShowTemperature';
import ShowHumidity from '../ShowHumidity/ShowHumidity';
import ShowWindSpeed from '../ShowWindSpeed/ShowWindSpeed';
import { ICurrentWeather } from '../../../utils/types/weather.types';
import { formatLastUpdateDate } from '../../../utils/helpers/formatDate';
import classes from './CurrentWeather.module.css';

const CurrentWeather: FC<ICurrentWeather> = ({
  humidity,
  windSpeed,
  celTemperature,
  lastUpdate,
  condition: { icon },

  // furAvgTemperature,
}) => {
  const formattedLastUpdate: string = formatLastUpdateDate(lastUpdate);

  return (
    <div className={classes['current-weather']}>
      <div className={classes['blur-background']} />

      <div className={classes['weather-details']}>
        <div className={classes['temperature-block']}>
          <ShowTemperature deg={celTemperature} />
        </div>

        <div className={classes['details-block']}>
          <ShowHumidity humidity={humidity} />

          <ShowWindSpeed windSpeed={windSpeed} />
        </div>
      </div>

      <div className={classes['image-wrapper']}>
        {icon === '' ? (
          <img
            className={classes['weather-icon-placeholder']}
            src={WeatherIconPlaceHolder}
            alt='Weather Icon'
          />
        ) : (
          <img
            src={icon}
            alt='Weather Icon'
          />
        )}

        {/* <img
          className={classes['weather-icon-placeholder']}
          src={WeatherIconPlaceHolder}
          alt='Weather Icon'
        /> */}

        <p>{formattedLastUpdate}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
