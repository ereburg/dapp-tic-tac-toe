import clsx from 'clsx';
import { Logo } from './logo';
import { Account } from './account';
import styles from './Header.module.scss';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.header__container)}>
        <Logo className={styles.header__logo} />
        {isAccountVisible && <Account />}
      </div>
    </header>
  );
}

export { Header };
