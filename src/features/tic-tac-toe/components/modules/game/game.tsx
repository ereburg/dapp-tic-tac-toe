import { ColumnLeft, ColumnRight, ColumnsContainer } from '../../ui/columns'
import { GradientTitle, HelpDescription } from '../../ui/typography'
import styles from './game.module.scss'
import { GameField } from '../game-field'
import { GameInfoPlayerMark } from '../game-info-player-mark'
import { Cell, IGameStatus, IPlayerGame, Mark } from '../../../types'
import { GameCountdown } from '../game-countdown'
import { GameTurnButton } from '@/features/tic-tac-toe/components/modules/game-turn-button'
import { GameStartButton } from '@/features/tic-tac-toe/components/modules/game-start-button'
import { GameReward } from '@/features/tic-tac-toe/components/modules/game-reward'

type GameProps = BaseComponentProps & {
  game: IPlayerGame
}

function getGameStatus(status: IGameStatus, playerMark: Mark) {
  if (typeof status !== 'string') {
    const winnerMark = status.Finished.winner
    if (!winnerMark) return 'draw'
    if (winnerMark === playerMark) return 'win'
    return 'lose'
  }
  return undefined
}

export function Game({ game }: GameProps) {
  const isGameFinished = Boolean(
    typeof game.status !== 'string' && game.status.Finished
  )
  const gameEndStatus = getGameStatus(game.status, game.playerMark)

  return (
    <ColumnsContainer>
      <ColumnLeft>
        <GradientTitle>
          {isGameFinished ? (
            <>
              {gameEndStatus === 'win' && 'You win'}
              {gameEndStatus === 'lose' && 'You lose'}
              {gameEndStatus === 'draw' && "It's a draw"}
            </>
          ) : (
            'Tic Tac Toe game'
          )}
        </GradientTitle>
        <HelpDescription>
          {isGameFinished ? (
            <>
              {gameEndStatus === 'win' && (
                <p>
                  Congratulations, the game is over, you won! Play and win to
                  make it to the Leaderboard. Good job.
                </p>
              )}
              {gameEndStatus === 'lose' && (
                <p>
                  Try playing again to win and earn PPV. Play and win to make it
                  to the Leaderboard.
                </p>
              )}
              {gameEndStatus === 'draw' && (
                <p>
                  The game is over, it's a draw! Play and win to make it to the
                  Leaderboard. Try again to win.
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

        {gameEndStatus === 'win' && <GameReward amount={game.winnerPoints} />}

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
