import clsx from 'clsx';
import { Socials } from './socials';
import { Copyright } from './copyright';
import styles from './Footer.module.scss';
import { Logo } from '../header/logo';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.footer__container)}>
        <div>
          <Logo className={styles.footer__logo} />
        </div>

        <Copyright />

        <Socials className={styles.footer__socials} />
      </div>
    </footer>
  );
}

export { Footer };
