import { Welcome } from './components/modules/welcome';
import { Game } from './components/modules/game';
import { useGame } from './hooks';

export function TicTacToe() {
  const { gameState } = useGame();

  return gameState ? <Game game={gameState} /> : <Welcome />;
}
