import { FC } from 'react';

import HumidityIcon from '../../../assets/icons/humidity-icon.png';
import classes from './ShowHumidity.module.css';

export interface ShowHumidityProps {
  humidity: number;
}

const ShowHumidity: FC<ShowHumidityProps> = ({ humidity }) => {
  return (
    <div className={classes.humidity}>
      <img
        src={HumidityIcon}
        alt='Humidity Icon'
      />
      <span>{humidity}%</span>
    </div>
  );
};

export default ShowHumidity;
