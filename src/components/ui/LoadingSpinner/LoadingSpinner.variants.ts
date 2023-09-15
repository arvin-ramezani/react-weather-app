import { Variants } from 'framer-motion';

export const loadingSpinnerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: (isShow) => (isShow ? { opacity: 1 } : { opacity: 0 }),
};
