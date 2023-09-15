import { FC } from 'react';
import { motion } from 'framer-motion';

import ShowTemperature from '../ShowTemperature/ShowTemperature';
import ShowHumidity from '../ShowHumidity/ShowHumidity';
import ShowWindSpeed from '../ShowWindSpeed/ShowWindSpeed';
import { ICurrentWeather, TemperatureUnit } from '@/utils/types/weather.types';
import { formatLastUpdateDate } from '@/utils/helpers/formatDate';
import ToggleTempUnit from '../ToggleTempUnit/ToggleTempUnit';
import classes from './CurrentWeather.module.css';

export interface CurrentWeatherProps {
  currentWeather: ICurrentWeather;
  tempUnit: TemperatureUnit;
  onToggleTempUnit: () => void;
}

const CurrentWeather: FC<CurrentWeatherProps> = ({
  currentWeather,
  tempUnit,
  onToggleTempUnit,
}) => {
  const {
    humidity,
    windSpeed,
    celTemperature,
    lastUpdate,
    location: { name: locationName, country },
    condition: { icon, text: conditionText },
    fahTemperature,
  } = currentWeather;

  const preferredTemperatureUnit =
    tempUnit === TemperatureUnit.CEL ? celTemperature : fahTemperature;

  const formattedLastUpdate: string = formatLastUpdateDate(lastUpdate);
  const location = `${locationName}, ${country}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6, delay: 0.4, type: 'tween' },
      }}
      className={classes['current-weather-container']}
      key={location}
    >
      <ToggleTempUnit
        currentUnit={tempUnit}
        onToggle={onToggleTempUnit}
      />

      <div className={classes['current-weather']}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={classes['blur-background']}
        />

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
            alt={`${conditionText} Icon`}
          />

          <p className={classes['last-update']}>Last Update</p>
          <p>{formattedLastUpdate}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentWeather;
