import { atom } from 'jotai';
import { IGameState } from './types';

export const AtomGame = atom<IGameState | undefined>(undefined);
export const AtomPending = atom<boolean>(false);
