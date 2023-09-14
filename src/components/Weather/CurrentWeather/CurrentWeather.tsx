import { FC } from 'react';

// import SunnyIcon from '../../../assets/icons/sunny-icon.png';
import ShowTemperature from '../ShowTemperature/ShowTemperature';
import ShowHumidity from '../ShowHumidity/ShowHumidity';
import ShowWindSpeed from '../ShowWindSpeed/ShowWindSpeed';
import classes from './CurrentWeather.module.css';
import { IForecast } from '../../../utils/types/weather.types';

const CurrentWeather: FC<IForecast> = ({
  avgHumidity,
  avgWindSpeed,
  celAvgTemperature,
  condition: { icon },
  date,
  // furAvgTemperature,
}) => {
  return (
    <div className={classes['current-weather']}>
      <div className={classes['blur-background']} />

      <div className={classes['weather-details']}>
        <div className={classes['temperature-block']}>
          <ShowTemperature deg={celAvgTemperature} />
        </div>

        <div className={classes['details-block']}>
          <ShowHumidity humidity={avgHumidity} />

          <ShowWindSpeed windSpeed={avgWindSpeed} />
        </div>
      </div>

      <div className={classes['image-wrapper']}>
        <img
          src={icon}
          alt='Weather Icon'
        />
        <p>{date}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
