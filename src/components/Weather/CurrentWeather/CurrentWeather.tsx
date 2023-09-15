import { FC } from 'react';

import ShowTemperature from '../ShowTemperature/ShowTemperature';
import ShowHumidity from '../ShowHumidity/ShowHumidity';
import ShowWindSpeed from '../ShowWindSpeed/ShowWindSpeed';
import { ICurrentWeather, TemperatureUnit } from '@/utils/types/weather.types';
import { formatLastUpdateDate } from '@/utils/helpers/formatDate';
import classes from './CurrentWeather.module.css';

export interface CurrentWeatherProps {
  currentWeather: ICurrentWeather | null;
  tempUnit: TemperatureUnit;
}

const CurrentWeather: FC<CurrentWeatherProps> = ({
  currentWeather,
  tempUnit,
}) => {
  if (!currentWeather) return null;

  const {
    humidity,
    windSpeed,
    celTemperature,
    lastUpdate,
    location: { name: locationName, country },
    condition: { icon },

    furTemperature,
  } = currentWeather;

  const preferredTemperatureUnit =
    tempUnit === TemperatureUnit.CEL ? celTemperature : furTemperature;

  const formattedLastUpdate: string = formatLastUpdateDate(lastUpdate);
  const location = `${locationName}, ${country}`;

  return (
    <div className={classes['current-weather']}>
      <div className={classes['blur-background']} />

      <h2>{location}</h2>

      <div className={classes['weather-details']}>
        <div className={classes['temperature-block']}>
          <ShowTemperature
            deg={preferredTemperatureUnit}
            type={tempUnit}
          />
        </div>

        <div className={classes['details-block']}>
          <ShowHumidity humidity={humidity} />

          <ShowWindSpeed windSpeed={windSpeed} />
        </div>
      </div>

      <div className={classes['image-wrapper']}>
        <img
          src={icon}
          alt='Weather Icon'
        />

        <p className={classes['last-update']}>Last Update</p>
        <p>{formattedLastUpdate}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
