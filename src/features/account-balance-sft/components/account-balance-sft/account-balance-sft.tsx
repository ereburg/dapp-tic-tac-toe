import styles from './account-balance-sft.module.scss'
import clsx from 'clsx'
import { useAccount } from '@gear-js/react-hooks'
import { useAccountFTBalance, useInitAccountFTBalance } from '../../hooks'
import { AccountBalanceSftItem } from '../account-balance-sft-item'

type TokensWalletProps = BaseComponentProps & {}

export function AccountBalanceSft({ className }: TokensWalletProps) {
  const { isAccountReady } = useAccount()
  const isFTStateReady = useInitAccountFTBalance()
  const { balance } = useAccountFTBalance()

  return isAccountReady && isFTStateReady ? (
    <AccountBalanceSftItem
      amount={balance}
      className={clsx(styles.wrapper, className)}
    />
  ) : null
}
