import clsx from 'clsx'
import styles from './game-field.module.scss'
import { GameCell } from '../game-cell'
import type { IFieldCell, IPlayerGame } from '../../types'
import { GameMark } from '../game-mark'
import { useGame, usePending } from '../../hooks'
import { calculateWinner } from '../../utils'
import { motion } from 'framer-motion'
import { variantsGameMark } from '../../variants'

type GameFieldProps = BaseComponentProps & {
  game: IPlayerGame
}

export function GameField({ game }: GameFieldProps) {
  const { countdown } = useGame()
  const { pending } = usePending()
  const board = game.board.cells
  const field: IFieldCell[] = []

  for (let i = 0; i < board.length; i++) {
    const row = board[i]

    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      field.push({ cell, x: j, y: i })
    }
  }

  const winnerRow = calculateWinner(board.flat())
  const winnerColor = winnerRow
    ? game.playerMark === board.flat()[winnerRow[0][0]]
    : false

  return (
    <div className={clsx(styles.grid, pending && styles.pending)}>
      {field.map((f, i) => (
        <GameCell
          key={i}
          disabled={
            Boolean(f.cell || winnerRow?.length) ||
            !countdown?.isActive ||
            pending
          }
          value={f}
          game={game}
        >
          {f.cell && (
            <GameMark
              mark={f.cell}
              className={clsx(
                styles.mark,
                f.cell === game.playerMark && styles.active
              )}
            />
          )}
        </GameCell>
      ))}
      {winnerRow && (
        <motion.div
          initial="enter"
          animate="center"
          variants={variantsGameMark}
          className={clsx(
            styles.line,
            styles[winnerRow[1]],
            winnerColor && styles['line--primary']
          )}
        />
      )}
    </div>
  )
}
