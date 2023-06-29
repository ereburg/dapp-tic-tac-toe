import { atom } from 'jotai'
import { IActiveCell, ICurrentGame, IGameState } from './types'

export const contractAtom = atom<IGameState | undefined>(undefined)
export const gameAtom = atom<ICurrentGame | undefined>(undefined)
export const ftAtom = atom<any>(0)

export const pendingAtom = atom<boolean>(false)
export const countdownAtom = atom<boolean>(true)
export const activeCellAtom = atom<IActiveCell | undefined>(undefined)
