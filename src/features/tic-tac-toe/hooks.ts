import {
  useAccount,
  useReadFullState,
  useSendMessage,
} from '@gear-js/react-hooks'
import { useEffect } from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import metaTxt from './assets/meta/ttt.meta.txt'
import metaFT from './assets/meta/ft_main.meta.txt'
import { IGameInstance, IGameState, IPlayerGame } from './types'
import {
  activeCellAtom,
  contractAtom,
  countdownAtom,
  ftAtom,
  gameAtom,
  pendingAtom,
} from './consts'
import { ADDRESS } from '@/app/consts'
import { useProgramMetadata } from '@/app/hooks'
import { HexString } from '@polkadot/util/types'

const programIdGame = ADDRESS.CONTRACT
const programIdFT = ADDRESS.FT

function useReadState<T>(programId: HexString, meta: string) {
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

  return {
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

export function useFT() {
  const setFTState = useSetAtom(ftAtom)
  const ftState = useAtomValue(ftAtom)
  return {
    ftState,
    setFTState,
  }
}

export const useInitGame = () => {
  const { account } = useAccount()
  const { state } = useReadState<IGameState>(programIdGame, metaTxt)
  const { state: stateFT } = useReadState<any>(programIdFT, metaFT)
  const { setContractState, setGameState } = useGame()
  const { setFTState } = useFT()

  useEffect(() => {
    if (programIdGame && account) {
      setContractState(state)
      console.log(state)

      if (state!.instances.length > 0) {
        const playerGames: IPlayerGame[] = []
        const instances = state!.instances

        for (let i = 0; i < instances.length; i++) {
          const instance = instances[i]
          if (instance.player === account.decodedAddress) {
            playerGames.push({ ...instance, id: i })
          }
        }

        const finishedGames = playerGames.filter(
          (game) => typeof game.status !== 'string'
        )
        const currentGames = playerGames.filter(
          (game) => game.status === 'InProgress'
        )

        if (currentGames.length > 0) {
          setGameState(currentGames[0])
        } else if (finishedGames.length > 0) {
          setGameState(finishedGames[0])
        }
      }
    }

    return () => {
      setContractState(undefined)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, state])

  useEffect(() => {
    if (programIdFT) {
      setFTState(stateFT)
    }

    return () => {
      setFTState(undefined)
    }
  }, [setFTState, stateFT])

  return programIdGame ? Boolean(state) : true
}

export function useGameMessage() {
  const metadata = useProgramMetadata(metaTxt)
  return useSendMessage(programIdGame, metadata)
}

export function usePending() {
  const [pending, setPending] = useAtom(pendingAtom)
  return { pending, setPending }
}
