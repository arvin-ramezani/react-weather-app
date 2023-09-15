import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import ForecastItem from '../ForecastItem/ForecastItem';
import { IForecast, TemperatureUnit } from '@/utils/types/weather.types';
import classes from './ForecastList.module.css';

export interface WeatherListProps {
  weatherList: IForecast[];
  tempUnit: TemperatureUnit;
}

const ForecastList: FC<WeatherListProps> = ({ weatherList, tempUnit }) => {
  const weatherListKey = JSON.stringify(weatherList);

  return (
    <motion.ul
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delay: 0.4,
            when: 'beforeChildren',
          },
        },
        exit: { opacity: 0 },
      }}
      initial={'hidden'}
      animate={'show'}
      exit={'hidden'}
      key={weatherListKey}
      className={classes['forecast-list']}
    >
      <AnimatePresence>
        {weatherList.map((weather) => (
          <ForecastItem
            key={weather.dayNumber}
            {...weather}
            preferredTempUnit={tempUnit}
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export default ForecastList;
