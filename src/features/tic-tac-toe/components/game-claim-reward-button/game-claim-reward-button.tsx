import { useGameMessage, usePending } from '../../hooks'
import { Button } from '@/components/ui/button'
import type { IPlayerGame } from '../../types'
import { useState } from 'react'

type GameClaimRewardButtonProps = BaseComponentProps & {
  game: IPlayerGame
}

export function GameClaimRewardButton({
  children,
  game,
}: GameClaimRewardButtonProps) {
  const message = useGameMessage()
  const { pending, setPending } = usePending()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onError = () => {
    setPending(false)
    setIsLoading(false)
  }
  const onSuccess = () => {
    setPending(false)
    setIsLoading(false)
  }

  const onGameStart = () => {
    setIsLoading(true)
    setPending(true)
    message({ ClaimRewards: { game_id: game.id } }, { onError, onSuccess })
  }

  return (
    <Button
      onClick={onGameStart}
      disabled={pending}
      isLoading={isLoading}
      variant="black"
    >
      {children}
    </Button>
  )
}
