import { u64 } from '@polkadot/types';

export interface IGameState {
  admin: string;
  instances: IGameInstance[];
  players: Record<string, IPlayer>[];
}

// export interface IPlayers {}

export interface IGameInstance {
  rand: number;
  board: IBoard;
  player: string;
  player_mark: Mark;
  bot_mark: Mark;
  status: IGameState;
  last_time: string;
}

export interface IPlayer {
  name: string;
  address: string;
}

export interface IBoard {
  cells: Cell[][];
  history: Mark[];
}

export enum Mark {
  X,
  O,
}

export type Seed = u64;
export type Cell = Partial<Mark>;

export interface GameAction {
  StartGame: { seed: Seed; name?: string };
  Turn: { game_id: number; x: number; y: number };
}

export interface GameEvent {
  GameStarted: { id: u64; player: string };
  Turn: { id: u64 };
}
