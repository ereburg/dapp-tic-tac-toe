import { motion } from 'framer-motion';
import styles from './game-cell.module.scss';
import { variantsGameMark } from '../../../variants';
import { Button } from '../../../../../components/ui/button';

type GameFieldProps = BaseComponentProps & {};

export function GameCell({ children }: GameFieldProps) {
  return (
    <Button variant="text" className={styles.cell}>
      <motion.span initial="enter" animate="center" variants={variantsGameMark} className={styles.mark}>
        {children}
      </motion.span>
    </Button>
  );
}
