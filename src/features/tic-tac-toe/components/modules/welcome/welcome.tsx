import WelcomePNG from 'features/tic-tac-toe/assets/images/welcome-bg.png';
import WelcomeWebp from 'features/tic-tac-toe/assets/images/welcome-bg.webp';
import { useAccount } from '@gear-js/react-hooks';
import { ColumnLeft, ColumnRight, ColumnsContainer } from 'features/tic-tac-toe/components/ui/columns';
import { GradientTitle, HelpDescription } from 'features/tic-tac-toe/components/ui/typography';
import { Wallet } from 'features/wallet';
import styles from './welcome.module.scss';
import { GameStartGame } from '../game-start-game';

export function Welcome() {
  const { account } = useAccount();

  return (
    <ColumnsContainer>
      <ColumnLeft>
        <GradientTitle>Tic Tac Toe game</GradientTitle>
        <HelpDescription>
          <p>
            A classic game of tic-tac-toe in which you compete not against a human, but against a smart contract. Play
            to win PPV.
          </p>
        </HelpDescription>
        <div>{account ? <GameStartGame>Start the game</GameStartGame> : <Wallet />}</div>
      </ColumnLeft>
      <ColumnRight>
        <div className={styles.image}>
          <picture>
            <source srcSet={WelcomeWebp} type="image/webp" />
            <source srcSet={WelcomePNG} type="image/png" />
            <img width={470} height={428} src={WelcomePNG} alt="Welcome!" loading="lazy" />
          </picture>
        </div>
      </ColumnRight>
    </ColumnsContainer>
  );
}
