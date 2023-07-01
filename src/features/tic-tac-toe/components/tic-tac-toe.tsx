import { useGame } from '../hooks'
import { Game } from './game'
import { Welcome } from './welcome'

export function TicTacToe() {
  const { gameState } = useGame()

  return gameState ? <Game game={gameState} /> : <Welcome />
}
