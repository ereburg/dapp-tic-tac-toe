import { useProgramMetadata } from 'hooks';
import { useAccount, useReadFullState, useSendMessage } from '@gear-js/react-hooks';
import { useEffect } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
// @ts-ignore
import metaTxt from './assets/meta/ttt.meta.txt';
import { ADDRESS } from '../../consts';
import { IGameState } from './types';
import { contractAtom, gameAtom, pendingAtom } from './consts';

const programId = ADDRESS.CONTRACT;

function useReadGameState<T>() {
  const metadata = useProgramMetadata(metaTxt);
  return useReadFullState<T>(programId, metadata);
}

export function useGame() {
  const setContractState = useSetAtom(contractAtom);
  const contractState = useAtomValue(contractAtom);
  const setGameState = useSetAtom(gameAtom);
  const gameState = useAtomValue(gameAtom);
  return {
    contractState,
    setContractState,
    setGameState,
    gameState,
  };
}

export const useInitGame = () => {
  const { account } = useAccount();
  const { state } = useReadGameState<IGameState>();
  const { setContractState, setGameState } = useGame();

  useEffect(() => {
    if (programId && account) {
      setContractState(state);

      // const findPlayer = state?.players.find((player) => player[0] === account.decodedAddress);

      const game = state?.instances.find((instance) => instance.player === account.decodedAddress);
      setGameState(game);
    }

    return () => {
      setContractState(undefined);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, state]);

  return programId ? Boolean(state) : true;
};

export function useGameMessage() {
  const metadata = useProgramMetadata(metaTxt);
  return useSendMessage(programId, metadata);
}

export function usePending() {
  const [pending, setPending] = useAtom(pendingAtom);
  return { pending, setPending };
}
