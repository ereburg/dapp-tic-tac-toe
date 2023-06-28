import { useProgramMetadata } from 'hooks';
import { useAlert, useApi } from '@gear-js/react-hooks';
import { useEffect, useState } from 'react';
import { MessagesDispatched } from '@gear-js/api';
import { HexString } from '@polkadot/util/types';
// @ts-ignore
import metaTxt from './assets/meta/ttt.meta.txt';
import { ADDRESS } from '../../consts';

const contractAddress = ADDRESS.CONTRACT;
export const useGame = () => {
  const { api, isApiReady } = useApi();
  const alert = useAlert();
  const [gameState, setGameState] = useState<any>();

  console.log({ gameState });

  const masterMetadata = useProgramMetadata(metaTxt);

  const readMasterContractState = () => {
    if (!isApiReady || !contractAddress || !masterMetadata) return;

    const programId = contractAddress;

    api.programState
      .read({ programId }, masterMetadata)
      .then((codec) => codec.toHuman() as any)
      .then((payload) => setGameState(payload))
      .catch(({ message }: Error) => alert.error(message));
  };

  const handleStateChange = ({ data }: MessagesDispatched, programId: HexString, onChange: () => void) => {
    const changedIDs = data.stateChanges.toHuman() as HexString[];
    const isAnyChange = changedIDs.some((id) => id === programId);

    if (isAnyChange) onChange();
  };

  useEffect(() => {
    if (!isApiReady || !contractAddress || !masterMetadata) return setGameState(undefined);

    readMasterContractState();

    const unsub = api.gearEvents.subscribeToGearEvent('MessagesDispatched', (event) =>
      handleStateChange(event, contractAddress, readMasterContractState),
    );

    return () => {
      unsub.then((unsubCallback) => unsubCallback());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApiReady, contractAddress, masterMetadata]);

  return contractAddress ? Boolean(gameState) : true;
};
