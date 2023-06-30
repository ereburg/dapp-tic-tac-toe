import { ColumnLeft, ColumnRight, ColumnsContainer } from '../../ui/columns'
import { GradientTitle, HelpDescription } from '../../ui/typography'
import styles from './game.module.scss'
import { GameField } from '../game-field'
import { GameInfoPlayerMark } from '../game-info-player-mark'
import { IPlayerGame } from '../../../types'
import { GameCountdown } from '../game-countdown'
import { GameTurnButton } from '@/features/tic-tac-toe/components/modules/game-turn-button'
import { GameStartButton } from '@/features/tic-tac-toe/components/modules/game-start-button'
import { GameReward } from '@/features/tic-tac-toe/components/modules/game-reward'

type GameProps = BaseComponentProps & {
  game: IPlayerGame
}

export function Game({ game }: GameProps) {
  const isGameFinished = Boolean(
    typeof game.status !== 'string' && game.status.Finished
  )
  const isPlayerWin =
    typeof game.status !== 'string'
      ? game.status.Finished.winner === game.playerMark
      : false

  return (
    <ColumnsContainer>
      <ColumnLeft>
        <GradientTitle>
          {isGameFinished ? (
            <>
              {isPlayerWin && 'You win'}
              {!isPlayerWin && 'You lose'}
            </>
          ) : (
            'Tic Tac Toe game'
          )}
        </GradientTitle>
        <HelpDescription>
          {isGameFinished ? (
            <>
              {isPlayerWin && (
                <p>
                  Congratulations, the game is over, you won! Play and win to
                  make it to the Leaderboard. Good job.
                </p>
              )}
              {!isPlayerWin && (
                <p>
                  Try playing again to win and earn PPV. Play and win to make it
                  to the Leaderboard.
                </p>
              )}
            </>
          ) : (
            <p>
              Players take turns making their moves. Make sure to complete your
              turn before the timer runs out.
            </p>
          )}
        </HelpDescription>

        {isPlayerWin && <GameReward amount={game.winnerPoints} />}

        {!isGameFinished ? (
          <>
            <GameCountdown mark={game.playerMark} timer={game.lastTime} />
            <GameTurnButton game={game} />
          </>
        ) : (
          <GameStartButton>Play again</GameStartButton>
        )}
      </ColumnLeft>
      <ColumnRight className={styles.field}>
        <GameField game={game} />

        <GameInfoPlayerMark mark={game.playerMark} className={styles.choose} />
      </ColumnRight>
    </ColumnsContainer>
  )
}
