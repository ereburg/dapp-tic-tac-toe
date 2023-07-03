import { Socials } from './socials'
import { Copyright } from './copyright'
import styles from './Footer.module.scss'
import { Logo } from '../header/logo'
import { Container } from '@/components/ui/container'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <div>
          <Logo className={styles.footer__logo} />
        </div>

        <Copyright />

        <Socials className={styles.footer__socials} />
      </Container>
    </footer>
  )
}

export { Footer }
