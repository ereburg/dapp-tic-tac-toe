import { Button } from '@/components/ui/button'
import { useGame, useGameMessage, usePending } from '../../../hooks/use-game'
import { IPlayerGame } from '@/features/tic-tac-toe/types'

type GameStartButtonProps = BaseComponentProps & {
  game: IPlayerGame
}

export function GameTurnButton({ game }: GameStartButtonProps) {
  const message = useGameMessage()
  const { countdown, activeCell } = useGame()
  const { pending, setPending } = usePending()

  const onError = () => setPending(false)
  const onSuccess = () => setPending(false)

  const onNextTurn = () => {
    let turnData = activeCell ?? { game_id: game.id, x: 0, y: 0 }

    setPending(true)
    message({ Turn: turnData }, { onError, onSuccess })
  }

  return !countdown?.isActive ? (
    <Button
      onClick={onNextTurn}
      isLoading={pending}
      variant={countdown?.isActive ? 'primary' : 'black'}
    >
      Skip
    </Button>
  ) : null
}
