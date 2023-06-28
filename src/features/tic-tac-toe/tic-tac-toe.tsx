import { Welcome } from './components/modules/welcome';
import { Game } from './components/modules/game';
import { useGame } from './hooks';

type TicTacToeProps = BaseComponentProps & {};

export function TicTacToe() {
  return <Welcome />;
  // return <Game />;
}
