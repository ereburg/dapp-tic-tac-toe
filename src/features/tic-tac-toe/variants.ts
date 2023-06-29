import { Variants } from 'framer-motion';

const initGameDelay = 2;
const initGameDuration = 0.75;

export const variantsPlayerMark: Variants = {
  enter: { opacity: 1 },
  center: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: initGameDuration,
      delay: initGameDelay,
    },
  },
};

export const variantsGameMark: Variants = {
  enter: { opacity: 0 },
  center: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: initGameDuration,
      delay: initGameDelay + initGameDuration,
    },
  },
};
