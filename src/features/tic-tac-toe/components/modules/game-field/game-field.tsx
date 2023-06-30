import clsx from 'clsx'
import styles from './game-field.module.scss'
import { GameCell } from '../game-cell'
import { IFieldCell, IPlayerGame } from '../../../types'
import { GameMark } from '../game-mark'
import { useGame, usePending } from '@/features/tic-tac-toe/hooks'
import { calculateWinner } from '@/features/tic-tac-toe/utils'
import { motion } from 'framer-motion'
import { variantsGameMark } from '@/features/tic-tac-toe/variants'

type GameFieldProps = BaseComponentProps & {
  game: IPlayerGame
}

export function GameField({ game }: GameFieldProps) {
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
    <div className={styles.grid}>
      {field.map((f, i) => (
        <GameCell
          key={i}
          disabled={Boolean(f.cell || winnerRow) || pending}
          value={f}
          game={game}
        >
          {f.cell && (
            <GameMark
              mark={f.cell}
              className={clsx(f.cell === game.playerMark && styles.active)}
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
