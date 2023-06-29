import { u64 } from '@polkadot/types'
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
      Finished: { winner: Mark }
    }

export interface IGameInstance {
  board: IBoard
  botMark: Mark
  finishTime: string | null
  isRewarded: boolean
  lastTime: string
  player: HexString
  playerMark: Mark
  rand: { seed: string }
  startTime: string
  status: IGameStatus
  winnerPoints: number | null
}

export interface IPlayerGame extends IGameInstance {
  id: number
}

export interface IPlayer {
  name: string
  address: HexString
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

export interface GameAction {
  StartGame: { seed: Seed; name?: string }
  Turn: IActiveCell
}

export interface GameEvent {
  GameStarted: { id: u64; player: string }
  Turn: { id: u64 }
}
