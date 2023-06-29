import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import styles from './game-cell.module.scss'
import { variantsGameMark } from '../../../variants'

type GameFieldProps = BaseComponentProps & {
  disabled?: boolean
}

export function GameCell({ children, disabled }: GameFieldProps) {
  return (
    <Button variant="text" className={styles.cell} disabled={disabled}>
      <motion.span
        initial="enter"
        animate="center"
        variants={variantsGameMark}
        className={styles.mark}
      >
        {children}
      </motion.span>
    </Button>
  )
}
