import { HexString } from '@polkadot/util/types'

export const LOCAL_STORAGE = {
  ACCOUNT: 'account',
  WALLET: 'wallet',
}

export const ADDRESS = {
  NODE: import.meta.env.VITE_NODE_ADDRESS,
  CONTRACT: import.meta.env.VITE_GAME_ADDRESS as HexString,
}
