import { withoutCommas } from '@gear-js/react-hooks';
import { LeaderboardEntry, LeaderboardState, Participant } from './types';

const comparePoints = ([, value]: LeaderboardEntry, [, nextValue]: LeaderboardEntry) => {
  const points = withoutCommas(value.totalPoints);
  const nextPoints = withoutCommas(nextValue.totalPoints);

  return Number(nextPoints) - Number(points);
};

const getParticipants = (state: LeaderboardState) => {
  const entries = Object.entries(state) as Entries<LeaderboardState>;

  return entries
    .sort(comparePoints)
    .map(([address, participant], index) => ({ ...participant, address, rank: index + 1 }));
};

function getPages(participants: Participant[], itemsPerPage: number) {
  const pages = [];
  const pagesCount = Math.ceil(participants.length / itemsPerPage);

  for (let i = 0; i < pagesCount; i += 1) {
    const firstIndex = i * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;

    const page = participants.slice(firstIndex, lastIndex);

    pages.push(page);
  }

  return pages;
}

function withSearch(participants: Participant[], searchQuery: string) {
  return participants.filter(({ address, name }) => {
    const lowercaseQuery = searchQuery.toLocaleLowerCase();

    return address.toLocaleLowerCase().includes(lowercaseQuery) || name.toLocaleLowerCase().includes(lowercaseQuery);
  });
}

function getMedal(rank: number) {
  if (rank === 1) return 'gold';
  if (rank === 2) return 'silver';
  if (rank === 3) return 'bronze';
}

export { getParticipants, getPages, withSearch, getMedal };
