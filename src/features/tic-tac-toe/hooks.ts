import {
  useAccount,
  useReadFullState,
  useSendMessage,
} from '@gear-js/react-hooks'
import { useEffect } from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import metaTxt from './assets/meta/ttt.meta.txt'
import metaFT from './assets/meta/ft_main.meta.txt'
import { IGameState } from './types'
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

      const gameIndex = state?.instances.findIndex(
        (instance) => instance.player === account.decodedAddress
      )

      if (gameIndex && gameIndex >= 0 && state) {
        const game = state.instances[gameIndex]
        setGameState({ ...game, id: gameIndex })
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
