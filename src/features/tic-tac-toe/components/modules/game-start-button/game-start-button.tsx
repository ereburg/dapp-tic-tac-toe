import { Button } from 'components/ui/button';
import { useAccount } from '@gear-js/react-hooks';
import { useGameMessage, usePending } from '../../../hooks';

type GameStartButtonProps = BaseComponentProps & {};

export function GameStartButton({ children }: GameStartButtonProps) {
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
    <Button onClick={onGameStart} isLoading={pending}>
      {children}
    </Button>
  );
}
