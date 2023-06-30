import styles from './account-tokens-balance.module.scss'
import {
  useAccountFTBalance,
  useInitAccountFTBalance,
} from '@/features/tic-tac-toe/hooks/use-ft-balance'
import { TokensWallet } from '@/features/tokens-wallet'
import { useAccount } from '@gear-js/react-hooks'

type AccountBalanceProps = BaseComponentProps & {}

export function AccountTokensBalance({ className }: AccountBalanceProps) {
  const { isAccountReady } = useAccount()
  const isFTStateReady = useInitAccountFTBalance()
  const { balance } = useAccountFTBalance()

  return isAccountReady && isFTStateReady ? (
    <TokensWallet unit={'PPV'} amount={balance} className={styles.wrapper} />
  ) : null
}
