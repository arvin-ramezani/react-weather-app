import { FC } from 'react';
import { motion } from 'framer-motion';
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';
import { WiDegrees } from 'react-icons/wi';

import { TemperatureUnit } from '@/utils/types/weather.types';
import classes from './ShowTemperature.module.css';

interface ShowTemperatureProps {
  deg: number;
  type?: TemperatureUnit;
  degreeIcon?: boolean;
}

const ShowTemperature: FC<ShowTemperatureProps> = ({
  deg,
  type,
  degreeIcon,
}) => {
  let icon;

  if (degreeIcon) {
    icon = <WiDegrees />;
  } else if (type === TemperatureUnit.FAH) {
    icon = <RiFahrenheitLine />;
  } else {
    icon = <RiCelsiusLine />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className={classes.temperature}
      key={type || deg}
    >
      <p className={classes['temperature-text']}>{deg}</p>
      {icon}
    </motion.div>
  );
};

export default ShowTemperature;
