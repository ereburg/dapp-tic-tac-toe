import { HexString } from '@polkadot/util/types'

export const HEADERS = [
  '#',
  'Name and wallet',
  'Registration date',
  'Referrals',
  'Total points',
]

export const LEADERBOARD_CONTRACT_ADDRESS = import.meta.env
  .VITE_LEADERBOARD_ADDRESS as HexString
