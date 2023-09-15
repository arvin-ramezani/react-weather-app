import { FC } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import { loadingSpinnerVariants } from './LoadingSpinner.variants';
import classes from './LoadingSpinner.module.css';

export interface LoadingSpinnerProps {
  show: boolean;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ show }) => {
  return ReactDOM.createPortal(
    <motion.div
      variants={loadingSpinnerVariants}
      initial='hidden'
      animate='show'
      exit='hidden'
      custom={show}
      className={classes.wrapper}
    >
      <span className={classes.loader}></span>
    </motion.div>,
    document.getElementById('loading-spinner')!
  );
};

export default LoadingSpinner;
