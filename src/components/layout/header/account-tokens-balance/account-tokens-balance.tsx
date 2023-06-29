import { VaraTokensBalanceIcon } from '../assets/images'
import styles from './account-tokens-balance.module.scss'
import { useFT } from '@/features/tic-tac-toe/hooks'

type AccountBalanceProps = BaseComponentProps & {}

export function AccountTokensBalance({ className }: AccountBalanceProps) {
  const { ftState } = useFT()

  // console.log({ ftState })
  return ftState ? (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <VaraTokensBalanceIcon width={20} height={20} />
      </div>
      <p className={styles.balance}>
        <b className={styles.balanceAmount}>{0}</b>
        <span className={styles.balanceUnit}>PPV</span>
      </p>
    </div>
  ) : null
}
