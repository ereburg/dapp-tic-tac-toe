import { atom } from 'jotai';
import { IGameInstance, IGameState } from './types';

export const contractAtom = atom<IGameState | undefined>(undefined);
export const gameAtom = atom<IGameInstance | undefined>(undefined);
export const pendingAtom = atom<boolean>(false);
