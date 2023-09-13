import { FC } from 'react';
import { RiWindyLine } from 'react-icons/ri';

import classes from './ShowWindSpeed.module.css';

export interface ShowWindProps {
  windSpeed: number;
}

const ShowWindSpeed: FC<ShowWindProps> = ({ windSpeed }) => {
  return (
    <div className={classes['show-wind-speed']}>
      <RiWindyLine size='2.4rem' />
      <span>{windSpeed} km/h</span>
    </div>
  );
};

export default ShowWindSpeed;
