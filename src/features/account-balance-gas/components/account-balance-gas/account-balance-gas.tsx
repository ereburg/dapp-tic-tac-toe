import { useAccount } from '@gear-js/react-hooks'
import { AccountBalanceGasItem } from '../account-balance-gas-item'

type AccountBalanceProps = BaseComponentProps & {}

export function AccountBalanceGas({ className }: AccountBalanceProps) {
  const { account } = useAccount()
  return account ? (
    <AccountBalanceGasItem account={account} className={className} />
  ) : null
}
