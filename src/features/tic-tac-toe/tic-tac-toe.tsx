import { Welcome } from './components/modules/welcome';
import { Game } from './components/modules/game';
import { useGame } from './hooks';

type TicTacToeProps = BaseComponentProps & {};

export function TicTacToe() {
  const { gameState } = useGame();

  console.log({ gameState });

  return <Welcome />;
  // return <Game />;
}
