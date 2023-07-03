import { HexString } from '@polkadot/util/types';

type ParticipantState = {
  name: string;
  referrals: string;
  registrationDate: string;
  totalPoints: string;
};

type LeaderboardState = Record<HexString, ParticipantState>;

type LeadboardEntries = Entries<LeaderboardState>;
type LeaderboardEntry = LeadboardEntries[number];

type Participant = ParticipantState & {
  rank: number;
  address: HexString;
};

export type { LeaderboardState, LeaderboardEntry, Participant };
