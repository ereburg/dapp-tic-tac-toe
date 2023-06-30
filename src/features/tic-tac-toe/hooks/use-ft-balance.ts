import { useAccount } from '@gear-js/react-hooks'
import meta from '@/features/tic-tac-toe/assets/meta/ft_main.meta.txt'
import metaFTLogic from '@/features/tic-tac-toe/assets/meta/ft_logic.meta.txt'
import metaFTStorage from '@/features/tic-tac-toe/assets/meta/ft_storage.meta.txt'
import { useReadState } from '@/features/tic-tac-toe/hooks/use-game'
import { ADDRESS } from '@/app/consts'
import { useAtomValue, useSetAtom } from 'jotai'
import { accountFTBalanceAtom } from '@/features/tic-tac-toe/consts'
import { IFTLogic, IFTMain, IFTStorage } from '@/features/tic-tac-toe/types'
import { useEffect, useRef, useState } from 'react'
import {
  getAccountBalanceById,
  getFTStorageIdByAccount,
} from '@/features/tic-tac-toe/utils'

const programId = ADDRESS.FT

export function useAccountFTBalance() {
  const setBalance = useSetAtom(accountFTBalanceAtom)
  const balance = useAtomValue(accountFTBalanceAtom)
  return {
    balance,
    setBalance,
  }
}

export function useInitAccountFTBalance() {
  const { setBalance } = useAccountFTBalance()
  const { account } = useAccount()
  const ref = useRef<boolean>(false)

  const stateMain = useReadState<IFTMain>({
    programId,
    meta,
  }).state
  const stateLogic = useReadState<IFTLogic>({
    programId: stateMain?.ftLogicId,
    meta: metaFTLogic,
  }).state
  const stateStorage = useReadState<IFTStorage>({
    programId: getFTStorageIdByAccount({ stateLogic, account }),
    meta: metaFTStorage,
  }).state

  // console.log({ stateMain, stateLogic, stateStorage })

  const amount = getAccountBalanceById({ account, stateStorage })

  useEffect(() => {
    setBalance(amount)
    if (!ref.current) ref.current = true

    return () => {
      setBalance(0)
    }
  }, [amount])

  return ref.current
}
