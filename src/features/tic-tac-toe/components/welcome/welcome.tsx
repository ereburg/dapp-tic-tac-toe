import WelcomePNG from '../assets/images/welcome-bg.png'
import WelcomeWebp from '../assets/images/welcome-bg.webp'
import { useAccount } from '@gear-js/react-hooks'
import { ColumnLeft, ColumnRight, ColumnsContainer } from '../ui/columns'
import { GradientTitle, HelpDescription } from '../ui/typography'
import { Wallet } from '@/features/wallet'
import styles from './welcome.module.scss'
import { GameStartButton } from '../game-start-button'

export function Welcome() {
  const { account } = useAccount()

  return (
    <ColumnsContainer>
      <ColumnLeft>
        <GradientTitle>Tic Tac Toe game</GradientTitle>
        <HelpDescription>
          <p>
            A classic game of tic-tac-toe in which you compete not against a
            human, but against a smart contract. Play to win PPV.
          </p>
        </HelpDescription>
        <div>
          {account ? (
            <GameStartButton>Start the game</GameStartButton>
          ) : (
            <Wallet />
          )}
        </div>
      </ColumnLeft>
      <ColumnRight>
        <div className={styles.image}>
          <picture>
            <source srcSet={WelcomeWebp} type="image/webp" />
            <source srcSet={WelcomePNG} type="image/png" />
            <img
              width={470}
              height={428}
              src={WelcomePNG}
              alt="Welcome!"
              loading="lazy"
            />
          </picture>
        </div>
      </ColumnRight>
    </ColumnsContainer>
  )
}
