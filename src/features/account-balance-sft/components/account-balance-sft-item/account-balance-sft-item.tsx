import styles from './account-balance-sft-item.module.scss'
import clsx from 'clsx'
import { WalletSFTIcon } from '../../assets/images'

type TokensWalletProps = BaseComponentProps & {
  amount: number
  unit?: string
}

export function AccountBalanceSftItem({
  amount,
  unit = 'PPT',
  className,
}: TokensWalletProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.icon}>
        <WalletSFTIcon width={20} height={20} />
      </div>
      <p className={styles.balance}>
        <b className={styles.balanceAmount}>{amount}</b>
        <span className={styles.balanceUnit}>{unit}</span>
      </p>
    </div>
  )
}
