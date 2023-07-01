import { HexString } from '@polkadot/util/types'

export type IFTMain = {
  admin: HexString
  ftLogicId: HexString
  transactions: []
}

export type IFTLogic = {
  admin: HexString
  ftokenId: HexString
  idToStorage: Array<[string, HexString]>
  instructions: []
  storageCodeHash: HexString
  transactions?: [] // missing on empty state
  transactionStatus: []
}

export type IFTStorage = {
  approvals: []
  balances: Array<[HexString, number]>
  ftLogicId: HexString
  transactionStatus: []
}
