import { FC, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import DefaultImageMobile from '@/assets/images/backgrounds/main-background-mobile.jpg';
import PartlyCloudyDayImageMobile from '@/assets/images/backgrounds/partly-cloudy-day-mobile.jpg';
import PartlyCloudyNightImageMobile from '@/assets/images/backgrounds/partly-cloudy-night-mobile.jpg';
import SunnyImageMobile from '@/assets/images/backgrounds/sunny-day-mobile.jpg';
import ClearNightImageMobile from '@/assets/images/backgrounds/clear-night-mobile.jpg';
import { LocalStorageDataName } from '@/utils/types/localStorage.type';
import classes from './MainBackground.module.css';

export enum ConditionText {
  SUNNY = 'Sunny',
  CLEAR = 'Clear',
  PARTLY_CLOUDY = 'Partly cloudy',
  PARTLY_CLOUDY_NIGHT = 'partlyCloudyNight',
}

export interface MainBackgroundProps {
  conditionText: ConditionText | undefined;
  isDay: boolean | undefined;
}

const MainBackground: FC<MainBackgroundProps> = ({ conditionText, isDay }) => {
  const [isCityInLocalStorage] = useState(
    !!localStorage.getItem(LocalStorageDataName.CITY_NAME)
  );
  const [backgroundImgPath, setBackgroundImgPath] = useState<string | null>(
    isCityInLocalStorage ? null : DefaultImageMobile
  );

  useEffect(() => {
    if (conditionText === ConditionText.SUNNY) {
      setBackgroundImgPath(SunnyImageMobile);
    } else if (conditionText === ConditionText.CLEAR) {
      setBackgroundImgPath(ClearNightImageMobile);
    } else if (conditionText === ConditionText.PARTLY_CLOUDY) {
      setBackgroundImgPath(
        isDay ? PartlyCloudyDayImageMobile : PartlyCloudyNightImageMobile
      );
    }
  }, [conditionText]);

  return (
    <div className={classes.background}>
      {/* <div className={classes['background-layout']} /> */}

      <AnimatePresence>
        {backgroundImgPath && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={conditionText}
            src={backgroundImgPath}
            alt={conditionText}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainBackground;
