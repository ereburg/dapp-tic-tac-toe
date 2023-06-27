import clsx from 'clsx';
import { Logo } from './logo';
import styles from './Header.module.scss';
import { Wallet } from '../../../features/wallet';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.header__container)}>
        <Logo className={styles.header__logo} />

        <Wallet />
      </div>
    </header>
  );
}
