import styles from './account-tokens-balance.module.scss'
import { useFT } from '@/features/tic-tac-toe/hooks'
import { TokensWallet } from '@/components/ui/tokens-wallet'

type AccountBalanceProps = BaseComponentProps & {}

export function AccountTokensBalance({ className }: AccountBalanceProps) {
  const { ftState } = useFT()

  // console.log({ ftState })
  return ftState ? (
    <TokensWallet unit={'PPV'} amount={0} className={styles.wrapper} />
  ) : null
}
