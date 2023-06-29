import WelcomePNG from 'features/tic-tac-toe/assets/images/welcome-bg.png';
import WelcomeWebp from 'features/tic-tac-toe/assets/images/welcome-bg.webp';
import { Button } from 'components/ui/button';
import { useAccount } from '@gear-js/react-hooks';
import { ColumnLeft, ColumnRight, ColumnsContainer } from '../../common/columns';
import styles from './welcome.module.scss';
import { GradientTitle, HelpDescription } from '../../common/typography';
import { Wallet } from '../../../../wallet';
import { useGameMessage, usePending } from '../../../hooks';

export function Welcome() {
  const { account } = useAccount();
  const message = useGameMessage();
  const { pending, setPending } = usePending();

  const seed = Math.floor(Math.random() * 10 ** 10);

  const onError = () => {
    setPending(false);
  };
  const onSuccess = () => {
    setPending(false);
  };

  const onGameStart = () => {
    setPending(true);
    message({ StartGame: { seed, name: account?.meta.name } }, { onError, onSuccess });
  };

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
        <div>
          {account ? (
            <Button onClick={onGameStart} isLoading={pending}>
              Start the game
            </Button>
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
            <img width={470} height={428} src={WelcomePNG} alt="Welcome!" loading="lazy" />
          </picture>
        </div>
      </ColumnRight>
    </ColumnsContainer>
  );
}
