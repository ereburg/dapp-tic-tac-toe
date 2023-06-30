import { useGame } from '@/features/tic-tac-toe/hooks/use-game'
import { Game } from '@/features/tic-tac-toe/components/modules/game'
import { Welcome } from '@/features/tic-tac-toe/components/modules/welcome'

export default function Home() {
  const { gameState } = useGame()

  return gameState ? <Game game={gameState} /> : <Welcome />
}
