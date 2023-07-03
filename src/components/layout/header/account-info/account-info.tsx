import clsx from 'clsx'
import styles from './account-info.module.scss'
import { Wallet } from '@/features/wallet'
import { useAccount } from '@gear-js/react-hooks'
import {
  useAccountFTBalance,
  useInitAccountFTBalance,
} from '@/features/account-balance-sft/hooks'
import { PointsBalance, VaraBalance } from '@/components/ui/balance'

type AccountInfoProps = BaseComponentProps & {}

function AccountPointsBalance() {
  const { isAccountReady } = useAccount()
  const isFTStateReady = useInitAccountFTBalance()
  const { balance } = useAccountFTBalance()

  return isAccountReady && isFTStateReady ? (
    <PointsBalance value={balance} />
  ) : null
}

function AccountVaraBalance() {
  const { account } = useAccount()
  return account ? (
    <VaraBalance value={account.balance.value} unit={account.balance.unit} />
  ) : null
}

export function AccountInfo({ className }: AccountInfoProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <AccountPointsBalance />
      <AccountVaraBalance />
      <Wallet />
    </div>
  )
}
