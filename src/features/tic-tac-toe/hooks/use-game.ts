import {
  useAccount,
  useReadFullState,
  useSendMessage,
} from '@gear-js/react-hooks'
import { useEffect } from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import metaTxt from '../assets/meta/ttt.meta.txt'
import { IGameState } from '../types'
import {
  activeCellAtom,
  contractAtom,
  countdownAtom,
  gameAtom,
  pendingAtom,
} from '../consts'
import { ADDRESS } from '@/app/consts'
import { useProgramMetadata } from '@/app/hooks'
import { HexString } from '@polkadot/util/types'
import { getPlayerGames } from '@/features/tic-tac-toe/utils'

const programIdGame = ADDRESS.CONTRACT

export function useReadState<T>({
  programId,
  meta,
}: {
  programId?: HexString
  meta: string
}) {
  const metadata = useProgramMetadata(meta)
  return useReadFullState<T>(programId, metadata)
}

export function useGame() {
  const setContractState = useSetAtom(contractAtom)
  const contractState = useAtomValue(contractAtom)
  const setGameState = useSetAtom(gameAtom)
  const gameState = useAtomValue(gameAtom)
  const setCountdown = useSetAtom(countdownAtom)
  const countdown = useAtomValue(countdownAtom)
  const setActiveCell = useSetAtom(activeCellAtom)
  const activeCell = useAtomValue(activeCellAtom)

  const resetGameState = () => {
    setContractState(undefined)
    setGameState(undefined)
    setCountdown(undefined)
    setActiveCell(undefined)
  }

  return {
    resetGameState,
    contractState,
    setContractState,
    setGameState,
    gameState,
    setCountdown,
    countdown,
    setActiveCell,
    activeCell,
  }
}

export const useInitGame = () => {
  const { account } = useAccount()
  const { state, error } = useReadState<IGameState>({
    programId: programIdGame,
    meta: metaTxt,
  })
  const { setContractState, setGameState, setCountdown, resetGameState } =
    useGame()

  useEffect(() => {
    if (programIdGame && account) {
      setContractState(state)

      if (state && state.instances.length > 0) {
        const currentPlayer = state.players.find(
          ([id]) => id === account.decodedAddress
        )

        if (currentPlayer) {
          const lastGameId = currentPlayer[1].lastGameId

          if (lastGameId) {
            const game = state.instances[lastGameId]
            setGameState({ ...game, id: lastGameId })

            setCountdown((prev) => {
              const isNew = prev?.value !== game.lastTime

              return isNew ? { value: game.lastTime, isActive: isNew } : prev
            })
          } else {
            const { finishedGames, currentGames } = getPlayerGames(
              state,
              account
            )
            if (currentGames.length > 0) {
              setGameState(currentGames[0])
            } else if (finishedGames.length > 0) {
              setGameState(finishedGames[0])
            }
          }
        } else {
          resetGameState()
        }
      }
    }

    return () => {
      resetGameState()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, state])

  return {
    isGameReady: programIdGame ? Boolean(state) : true,
    errorGame: error,
  }
}

export function useGameMessage() {
  const metadata = useProgramMetadata(metaTxt)
  return useSendMessage(programIdGame, metadata)
}

export function usePending() {
  const [pending, setPending] = useAtom(pendingAtom)
  return { pending, setPending }
}
