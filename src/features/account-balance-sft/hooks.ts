import meta from './assets/meta/ft_main.meta.txt'
import metaFTLogic from './assets/meta/ft_logic.meta.txt'
import metaFTStorage from './assets/meta/ft_storage.meta.txt'
import { useEffect } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import { useAccount } from '@gear-js/react-hooks'
import { useReadState } from '@/app/hooks/api'
import { accountFTBalanceAtom } from './store'
import { IFTLogic, IFTMain, IFTStorage } from './types'
import { getAccountBalanceById, getFTStorageIdByAccount } from './utils'
import { ADDRESS } from './consts'

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

  const {
    state: stateMain,
    error: errorMain,
    isStateRead: readMain,
  } = useReadState<IFTMain>({
    programId: ADDRESS.SFT,
    meta,
  })
  const {
    state: stateLogic,
    error: errorLogic,
    isStateRead: readLogic,
  } = useReadState<IFTLogic>({
    programId: stateMain?.ftLogicId,
    meta: metaFTLogic,
  })
  const {
    state: stateStorage,
    error: errorStorage,
    isStateRead: readStorage,
  } = useReadState<IFTStorage>({
    programId: getFTStorageIdByAccount({ stateLogic, account }),
    meta: metaFTStorage,
  })

  const amount = getAccountBalanceById({ account, stateStorage })

  useEffect(() => {
    setBalance(amount)

    return () => {
      setBalance(0)
    }
  }, [amount])

  return {
    isFTReady: readMain && readLogic,
    errorFT: errorMain || errorStorage || errorLogic,
  }
}
