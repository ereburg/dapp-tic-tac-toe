import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import styles from './game-cell.module.scss'
import { variantsGameMark } from '../../../variants'
import { IFieldCell, IPlayerGame } from '@/features/tic-tac-toe/types'
import {
  useGameMessage,
  usePending,
} from '@/features/tic-tac-toe/hooks/use-game'
import clsx from 'clsx'

type GameFieldProps = BaseComponentProps & {
  disabled?: boolean
  value: IFieldCell
  game: IPlayerGame
}

export function GameCell({
  children,
  className,
  disabled,
  value,
  game,
}: GameFieldProps) {
  const message = useGameMessage()

  const { setPending } = usePending()

  const onError = () => setPending(false)
  const onSuccess = () => setPending(false)

  const onSelectCell = () => {
    // console.log('click', value)
    setPending(true)
    message(
      { Turn: { game_id: game.id, x: value.x, y: value.y } },
      { onError, onSuccess }
    )
  }

  return (
    <Button
      variant="text"
      className={clsx(styles.cell, className)}
      disabled={disabled}
      onClick={onSelectCell}
    >
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
