import { MessagesDispatched } from '@gear-js/api'
import { HexString } from '@polkadot/util/types'
import {
  Cell,
  IFTLogic,
  IFTStorage,
  IGameState,
  IPlayerGame,
} from '@/features/tic-tac-toe/types'
import { Account } from '@gear-js/react-hooks'

export const handleStateChange = (
  { data }: MessagesDispatched,
  programId: HexString,
  onChange: () => void
) => {
  const changedIDs = data.stateChanges.toHuman() as HexString[]
  const isAnyChange = changedIDs.some((id) => id === programId)

  if (isAnyChange) onChange()
}

export const getPlayerGames = (state: IGameState, account: Account) => {
  const playerGames: IPlayerGame[] = []
  const instances = state!.instances

  for (let i = 0; i < instances.length; i++) {
    const instance = instances[i]
    if (instance.player === account.decodedAddress) {
      playerGames.push({ ...instance, id: i })
    }
  }

  const finishedGames = playerGames.filter(
    (game) => typeof game.status !== 'string'
  )
  const currentGames = playerGames.filter(
    (game) => game.status === 'InProgress'
  )

  return { finishedGames, currentGames }
}

export function calculateWinner(squares: Cell[]) {
  const lines: [number[], string][] = [
    [[0, 1, 2], 'row-1'],
    [[3, 4, 5], 'row-2'],
    [[6, 7, 8], 'row-3'],
    [[0, 3, 6], 'col-1'],
    [[1, 4, 7], 'col-2'],
    [[2, 5, 8], 'col-3'],
    [[0, 4, 8], 'diagonal-1'],
    [[2, 4, 6], 'diagonal-2'],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i][0]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i]
    }
  }
  return null
}

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
        return a[1] as number
      }
    }
  }
  return 0
}
