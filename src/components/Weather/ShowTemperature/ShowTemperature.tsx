import { FC } from 'react';
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
  if (degreeIcon) {
    return (
      <div className={classes.temperature}>
        <p className={classes['temperature-text']}>{deg}</p>
        <WiDegrees />
      </div>
    );
  }

  if (type === TemperatureUnit.FUH) {
    return (
      <div className={classes.temperature}>
        <p className={classes['temperature-text']}>{deg}</p>
        <RiFahrenheitLine />
      </div>
    );
  }

  return (
    <div className={classes.temperature}>
      <p className={classes['temperature-text']}>{deg}</p>
      <RiCelsiusLine />
    </div>
  );
};

export default ShowTemperature;
