import styles from './game-reward.module.scss'
import { GameRewardIcon } from '@/features/tic-tac-toe/assets'
import { TokensWallet } from '@/components/ui/tokens-wallet'

type GameRewardProps = BaseComponentProps & {
  amount: number | null
}

export function GameReward({ children, amount }: GameRewardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <GameRewardIcon /> Your rewards:
      </div>
      <TokensWallet
        unit={'PPV'}
        amount={amount || 0}
        className={styles.balance}
      />
    </div>
  )
}
