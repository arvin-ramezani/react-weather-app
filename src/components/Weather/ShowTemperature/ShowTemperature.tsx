import { FC } from 'react';
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';

import classes from './ShowTemperature.module.css';

export enum TemperatureUnit {
  Fahrenheit = 'fahrenheit',
  Celsius = 'celsius',
}

interface ShowTemperatureProps {
  deg: number;
  type?: TemperatureUnit;
}

const ShowTemperature: FC<ShowTemperatureProps> = ({ deg, type }) => {
  if (type === TemperatureUnit.Fahrenheit) {
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
