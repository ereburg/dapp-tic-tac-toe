import { HexString } from '@polkadot/util/types'

export interface IGameState {
  admin: string
  config: {
    leaderboardContract: null | HexString
    nftMembershipGuard: null | HexString
  }
  instances: IGameInstance[]
  players: [HexString, IPlayer][]
}

export type IGameStatus =
  | 'InProgress'
  | {
      Finished: { winner: Cell }
    }

export interface IGameInstance {
  board: IBoard
  botMark: Mark
  finishTime: string | null
  isClaimed: boolean
  isRewarded: boolean
  lastTime: string
  player: HexString
  playerMark: Mark
  rand: { seed: string }
  startTime: string
  status: IGameStatus
  points: number | null
}

export interface IPlayerGame extends IGameInstance {
  id: number
}

export interface IPlayer {
  name: string
  address: HexString
  lastGameId: number
}

export interface IBoard {
  cells: Cell[][]
  history: Mark[]
}

export enum Mark {
  X = 'X',
  O = 'O',
}

export type Seed = number
export type Cell = Mark | null

export type IActiveCell = { game_id: number; x: number; y: number }
export type IFieldCell = { cell: Cell; x: number; y: number }
