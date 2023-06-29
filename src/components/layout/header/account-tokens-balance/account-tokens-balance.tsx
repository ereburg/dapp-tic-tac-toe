import { useAccount } from '@gear-js/react-hooks';
import { VaraTokensBalanceIcon } from '../assets/images';
import styles from './account-tokens-balance.module.scss';

type AccountBalanceProps = BaseComponentProps & {};

export function AccountTokensBalance({ children }: AccountBalanceProps) {
  const { account } = useAccount();
  return account ? (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <VaraTokensBalanceIcon width={20} height={20} />
      </div>
      <p className={styles.balance}>
        <b className={styles.balanceAmount}>0</b>
        <span className={styles.balanceUnit}>PPV</span>
      </p>
    </div>
  ) : null;
}
