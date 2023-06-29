import clsx from 'clsx'
import styles from './game-field.module.scss'
import { GameCell } from '../game-cell'
import { IPlayerGame, IGameInstance } from '../../../types'
import { GameMark } from '../game-mark'
import { useGame } from '@/features/tic-tac-toe/hooks'

type GameFieldProps = BaseComponentProps & {
  game: IPlayerGame
}

export function GameField({ game }: GameFieldProps) {
  const { countdown } = useGame()
  const board = game.board.cells.flat()

  return (
    <div className={styles.grid}>
      {board.map((cell, i) => (
        <GameCell key={i} disabled={Boolean(cell) || !countdown}>
          {cell && (
            <GameMark
              mark={cell}
              className={clsx(cell === game.playerMark && styles.active)}
            />
          )}
        </GameCell>
      ))}
    </div>
  )
}
