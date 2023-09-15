import { Variants } from 'framer-motion';

export const notificationVariants: Variants = {
  hidden: {
    top: -10,
    opacity: 0,
  },
  animate: (show) => {
    if (show) {
      return {
        top: 10,
        opacity: 1,
      };
    } else {
      return {
        top: -10,
        opacity: 0,
      };
    }
  },
};
