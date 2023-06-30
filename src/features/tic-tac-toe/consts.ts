import { atom } from 'jotai'
import { IActiveCell, IPlayerGame, IGameState } from './types'

export const contractAtom = atom<IGameState | undefined>(undefined)
export const gameAtom = atom<IPlayerGame | undefined>(undefined)
export const accountFTBalanceAtom = atom<number>(0)

export const pendingAtom = atom<boolean>(false)
export const countdownAtom = atom<
  { isActive: boolean; value: string } | undefined
>(undefined)
export const activeCellAtom = atom<IActiveCell | undefined>(undefined)
