import clsx from 'clsx'
import styles from './account-info.module.scss'
import { AccountBalanceGas } from '@/features/account-balance-gas'
import { AccountBalanceSft } from '@/features/account-balance-sft'
import { Wallet } from '@/features/wallet'

type AccountInfoProps = BaseComponentProps & {}

export function AccountInfo({ className }: AccountInfoProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <AccountBalanceSft />
      <AccountBalanceGas />
      <Wallet />
    </div>
  )
}
