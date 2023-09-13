import { FC } from 'react';

import SunnyIcon from '../../../assets/icons/sunny-icon.png';
import ShowTemperature from '../ShowTemperature/ShowTemperature';
import ShowHumidity from '../ShowHumidity/ShowHumidity';
import ShowWindSpeed from '../ShowWindSpeed/ShowWindSpeed';
import classes from './CurrentWeather.module.css';

const CurrentWeather: FC = () => {
  return (
    <div className={classes['current-weather']}>
      <div className={classes['blur-background']} />

      <div className={classes['weather-details']}>
        <div className={classes['temperature-block']}>
          <ShowTemperature deg={30} />
        </div>

        <div className={classes['details-block']}>
          <ShowHumidity humidity={74} />

          <ShowWindSpeed windSpeed={10} />
        </div>
      </div>

      <div className={classes['image-wrapper']}>
        <img
          src={SunnyIcon}
          alt='Weather Icon'
        />
        <p>Sat 3, Aug</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
