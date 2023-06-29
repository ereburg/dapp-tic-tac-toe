import { Wallet } from 'features/wallet';
import clsx from 'clsx';
import styles from './account-info.module.scss';
import { AccountGasBalance } from '../account-gas-balance';
import { AccountTokensBalance } from '../account-tokens-balance';

type AccountInfoProps = BaseComponentProps & {};

export function AccountInfo({ className }: AccountInfoProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <AccountTokensBalance />
      <AccountGasBalance />
      <Wallet />
    </div>
  );
}
