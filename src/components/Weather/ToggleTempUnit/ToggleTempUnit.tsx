import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';

import { TemperatureUnit } from '@/utils/types/weather.types';
import { disableUnitVariants } from './ToggleTempUnit.variants';
import classes from './ToggleTempUnit.module.css';

export interface ToggleTempUnitProps {
  onToggle: () => void;
  currentUnit: TemperatureUnit;
}

const ToggleTempUnit: React.FC<ToggleTempUnitProps> = ({
  currentUnit,
  onToggle,
}) => {
  let isCelsius = currentUnit === TemperatureUnit.CEL;

  let activeTempUnit;
  if (isCelsius) {
    activeTempUnit = (
      <RiCelsiusLine
        size={'.9rem'}
        aria-label='Celsius'
        role='img'
      />
    );
  } else {
    activeTempUnit = (
      <RiFahrenheitLine
        size={'.9rem'}
        aria-label='Fahrenheit'
        role='img'
      />
    );
  }

  return (
    <div
      data-is-celsius={isCelsius}
      onClick={onToggle}
      className={classes['toggle-temp-unit']}
      aria-label={`Toggle Temperature Unit (${
        isCelsius ? 'Celsius' : 'Fahrenheit'
      })`}
      role='button'
    >
      <motion.div
        className={classes['active-temp-unit']}
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        {activeTempUnit}
      </motion.div>

      <AnimatePresence>
        {isCelsius && (
          <motion.div
            key='disabledFahrenheit'
            variants={disableUnitVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'initial'}
            className={classes.fahrenheit}
            aria-hidden='true'
          >
            <RiFahrenheitLine size={'.9rem'} />
          </motion.div>
        )}

        {!isCelsius && (
          <motion.div
            key='disabledCelsius'
            variants={disableUnitVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'initial'}
            className={classes.celsius}
            aria-hidden='true'
          >
            <RiCelsiusLine size={'.9rem'} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToggleTempUnit;
