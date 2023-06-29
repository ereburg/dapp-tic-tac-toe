import { ColumnLeft, ColumnRight, ColumnsContainer } from '../../ui/columns'
import { GradientTitle, HelpDescription } from '../../ui/typography'
import styles from './game.module.scss'
import { GameField } from '../game-field'
import { GameInfoPlayerMark } from '../game-info-player-mark'
import { IPlayerGame } from '../../../types'
import { GameCountdown } from '../game-countdown'
import { GameTurnButton } from '@/features/tic-tac-toe/components/modules/game-turn-button'

type GameProps = BaseComponentProps & {
  game: IPlayerGame
}

export function Game({ game }: GameProps) {
  console.log({ game })
  return (
    <ColumnsContainer>
      <ColumnLeft>
        <GradientTitle>Tic Tac Toe game</GradientTitle>
        <HelpDescription>
          <p>
            Players take turns making their moves. Make sure to complete your
            turn before the timer runs out.
          </p>
        </HelpDescription>
        <GameCountdown mark={game.playerMark} timer={game.lastTime} />
        <GameTurnButton game={game} />
      </ColumnLeft>
      <ColumnRight className={styles.field}>
        <GameField game={game} />

        <GameInfoPlayerMark mark={game.playerMark} className={styles.choose} />
      </ColumnRight>
    </ColumnsContainer>
  )
}
