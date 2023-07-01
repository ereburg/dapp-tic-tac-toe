import styles from './game-reward.module.scss'
import { GameRewardIcon } from '../../assets'
import { AccountBalanceSftItem } from '@/features/account-balance-sft'
import clsx from 'clsx'

type GameRewardProps = BaseComponentProps & {
  amount: number | null
}

export function GameReward({ children, amount }: GameRewardProps) {
  return (
    <div className={clsx(styles.wrapper, children)}>
      <div className={styles.text}>
        <GameRewardIcon /> Your rewards:
      </div>
      <AccountBalanceSftItem amount={amount || 0} className={styles.balance} />
    </div>
  )
}
