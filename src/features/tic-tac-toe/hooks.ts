import { useProgramMetadata } from 'hooks';
import { useReadFullState, useSendMessage } from '@gear-js/react-hooks';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
// @ts-ignore
import metaTxt from './assets/meta/ttt.meta.txt';
import { ADDRESS } from '../../consts';
import { IGameState } from './types';
import { AtomGame, AtomPending } from './consts';

const programId = ADDRESS.CONTRACT;

function useReadGameState<T>() {
  const metadata = useProgramMetadata(metaTxt);
  return useReadFullState<T>(programId, metadata);
}

export function useGame() {
  const [gameState, setGameState] = useAtom(AtomGame);
  return { gameState, setGameState };
}

export const useInitGame = () => {
  const { state } = useReadGameState<IGameState>();
  const { setGameState } = useGame();

  useEffect(() => {
    if (programId) {
      setGameState(state);
    }

    return () => {
      setGameState(undefined);
    };
  }, [setGameState, state]);

  return programId ? Boolean(state) : true;
};

export function useGameMessage() {
  const metadata = useProgramMetadata(metaTxt);
  return useSendMessage(programId, metadata);
}

export function usePending() {
  const [pending, setPending] = useAtom(AtomPending);
  return { pending, setPending };
}
