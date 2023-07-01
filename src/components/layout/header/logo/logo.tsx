import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './logo.module.scss'
import { VaraLogoIcon } from '@/assets/images'

export function Logo({ className }: BaseComponentProps) {
  return (
    <Link to="/" className={clsx(styles.link, className)}>
      <VaraLogoIcon className={styles.logo} />
    </Link>
  )
}
