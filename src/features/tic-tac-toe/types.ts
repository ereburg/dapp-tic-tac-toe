import { u64 } from '@polkadot/types'
import { HexString } from '@polkadot/util/types'

export interface IGameState {
  admin: string
  instances: IGameInstance[]
  players: [HexString, IPlayer][]
}

export type IGameStatus = 'InProgress'

export interface IGameInstance {
  rand: { seed: string }
  board: IBoard
  player: HexString
  player_mark: Mark
  bot_mark: Mark
  status: IGameStatus
  lastTime: string
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

export interface GameAction {
  StartGame: { seed: Seed; name?: string }
  Turn: { game_id: number; x: number; y: number }
}

export interface GameEvent {
  GameStarted: { id: u64; player: string }
  Turn: { id: u64 }
}
