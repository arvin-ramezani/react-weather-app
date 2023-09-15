import { Variants } from 'framer-motion';

export const searchFormVariants: Variants = {};

export const searchFormBtnVariants: Variants = {
  initial: {
    opacity: 1,
  },
  tap: {
    scale: 0.9,
  },
  hover: { scale: 1.1 },
};

export const invalidTextVariants: Variants = {
  animate: { x: [50, 0, 30, 0, 10, 0] },
  exit: { opacity: 0 },
};
