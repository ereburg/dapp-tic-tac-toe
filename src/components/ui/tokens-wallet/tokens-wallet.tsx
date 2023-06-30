import styles from '@/components/layout/header/account-tokens-balance/account-tokens-balance.module.scss'
import { VaraTokensBalanceIcon } from '@/components/layout/header/assets/images'
import clsx from 'clsx'

type TokensWalletProps = BaseComponentProps & {
  amount: number
  unit: string
}

export function TokensWallet({
  children,
  amount,
  unit,
  className,
}: TokensWalletProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.icon}>
        <VaraTokensBalanceIcon width={20} height={20} />
      </div>
      <p className={styles.balance}>
        <b className={styles.balanceAmount}>{amount}</b>
        <span className={styles.balanceUnit}>{unit}</span>
      </p>
    </div>
  )
}
