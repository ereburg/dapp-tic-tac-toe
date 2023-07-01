import { ColumnLeft, ColumnRight, ColumnsContainer } from '../ui/columns'
import { GradientTitle, HelpDescription } from '../ui/typography'
import styles from './game.module.scss'
import { GameField } from '../game-field'
import { GameInfoPlayerMark } from '../game-info-player-mark'
import type { IPlayerGame } from '../../types'
import { GameCountdown } from '../game-countdown'
import { GameTurnButton } from '../game-turn-button'
import { GameStartButton } from '../game-start-button'
import { GameReward } from '../game-reward'
import { getGameStatus } from '../../utils'
import { GameClaimRewardButton } from '@/features/tic-tac-toe/components/game-claim-reward-button'

type GameProps = BaseComponentProps & {
  game: IPlayerGame
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
                  The game is over, it's a draw! <br /> Play and win to make it
                  to the Leaderboard. <br /> Try again to win.
                </p>
              )}
            </>
          ) : (
            <p>
              Players take turns making their moves. <br /> Make sure to
              complete your turn before the timer runs out.
            </p>
          )}
        </HelpDescription>

        {gameEndStatus === 'win' && <GameReward amount={game.points} />}

        {!isGameFinished ? (
          <>
            <GameCountdown mark={game.playerMark} timer={game.lastTime} />
            <GameTurnButton game={game} />
          </>
        ) : (
          <div className={styles.winner}>
            <GameStartButton>Play again</GameStartButton>
            {!game.isClaimed && (
              <GameClaimRewardButton game={game}>
                Claim rewards
              </GameClaimRewardButton>
            )}
          </div>
        )}
      </ColumnLeft>
      <ColumnRight className={styles.field}>
        <GameField game={game} />

        <GameInfoPlayerMark mark={game.playerMark} className={styles.choose} />
      </ColumnRight>
    </ColumnsContainer>
  )
}
