import { Account } from '@gear-js/react-hooks'
import { AccountBalanceGasIcon } from '@/features/account-balance-gas/assets/images'
import styles from './account-balance-gas-item.module.scss'
import clsx from 'clsx'

type AccountBalanceProps = BaseComponentProps & {
  account: Account
}

export function AccountBalanceGasItem({
  account,
  className,
}: AccountBalanceProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.icon}>
        <AccountBalanceGasIcon width={20} height={20} />
      </div>
      <p className={styles.balance}>
        <b className={styles.balanceAmount}>{account?.balance.value}</b>
        <span className={styles.balanceUnit}>{account?.balance.unit}</span>
      </p>
    </div>
  )
}
