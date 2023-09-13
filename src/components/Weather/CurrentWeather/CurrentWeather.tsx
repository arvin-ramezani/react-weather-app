import { FC } from 'react';
import {
  RiCelsiusLine,
  //  RiFahrenheitLine,
  RiWindyLine,
} from 'react-icons/ri';

import HumidityIcon from '../../../assets/icons/humidity-icon.png';
import SunnyIcon from '../../../assets/icons/sunny-icon.png';
import classes from './CurrentWeather.module.css';

const CurrentWeather: FC = () => {
  return (
    <div className={classes['current-weather']}>
      <div className={classes['blur-background']} />
      <div className={classes['weather-details']}>
        <div className={classes['temperature-block']}>
          <p className={classes.temperature}>
            30
            <RiCelsiusLine />
          </p>
        </div>
        <div className={classes['details-block']}>
          <div>
            <img
              src={HumidityIcon}
              alt='Humidity Icon'
            />
            <span>74%</span>
          </div>
          <div>
            <RiWindyLine size='2rem' />
            <span>10 km/h</span>
          </div>
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
