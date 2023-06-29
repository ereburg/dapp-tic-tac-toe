import clsx from 'clsx';
import { Logo } from './logo';
import styles from './header.module.scss';
import { Navigation } from './navigation';
import { AccountInfo } from './account-info';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.header__container)}>
        <Logo className={styles.header__logo} />
        <Navigation />
        <AccountInfo />
      </div>
    </header>
  );
}
