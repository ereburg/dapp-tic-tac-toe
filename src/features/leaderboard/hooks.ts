import { useReadFullState } from '@gear-js/react-hooks';
import { useProgramMetadata } from '@/app/hooks';
import metaTxt from './assets/leaderboard.meta.txt';
import { LEADERBOARD_CONTRACT_ADDRESS } from './consts';
import { LeaderboardState } from './types';

function useLeaderboardState() {
  const meta = useProgramMetadata(metaTxt);
  const { state } = useReadFullState<LeaderboardState>(LEADERBOARD_CONTRACT_ADDRESS, meta);

  return state;
}

export { useLeaderboardState };
