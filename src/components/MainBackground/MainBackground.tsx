import { FC } from 'react';

import classes from './MainBackground.module.css';

const MainBackground: FC = () => {
  return (
    <div className={classes.background}>
      <div className={classes['background-layout']} />
    </div>
  );
};

export default MainBackground;
