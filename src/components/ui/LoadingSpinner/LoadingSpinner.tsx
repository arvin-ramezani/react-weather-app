import { FC } from 'react';

import classes from './LoadingSpinner.module.css';

const LoadingSpinner: FC = () => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.loader}></span>
    </div>
  );
};

export default LoadingSpinner;
