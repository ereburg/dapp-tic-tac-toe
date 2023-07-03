import { IFTLogic, IFTStorage } from './types'
import { Account } from '@gear-js/react-hooks'
import { HexString } from '@polkadot/util/types'

export const getFTStorageIdByAccount = ({
  stateLogic,
  account,
}: {
  stateLogic?: IFTLogic
  account: Account
}) => {
  if (stateLogic && stateLogic.idToStorage.length > 0 && account) {
    for (let i = 0; i < stateLogic.idToStorage.length; i++) {
      const id = stateLogic.idToStorage[i]
      if (id[0] === account.decodedAddress.charAt(2)) {
        return id[1] as HexString
      }
    }
  }
  return undefined
}

export const getAccountBalanceById = ({
  stateStorage,
  account,
}: {
  stateStorage?: IFTStorage
  account: Account
}) => {
  if (stateStorage) {
    for (const a of stateStorage.balances) {
      if (a[0] === account?.decodedAddress) {
        return a[1]
      }
    }
  }
  return '0'
}
