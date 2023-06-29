import { useAccount } from '@gear-js/react-hooks';
import { VaraGasBalanceIcon } from '../assets/images';
import styles from './account-gas-balance.module.scss';

type AccountBalanceProps = BaseComponentProps & {};

export function AccountGasBalance({ children }: AccountBalanceProps) {
  const { account } = useAccount();
  return account ? (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <VaraGasBalanceIcon width={20} height={20} />
      </div>
      <p className={styles.balance}>
        <b className={styles.balanceAmount}>{account?.balance.value}</b>
        <span className={styles.balanceUnit}>{account?.balance.unit}</span>
      </p>
    </div>
  ) : null;
}
