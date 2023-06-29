import { Link } from 'react-router-dom'
import { ReactComponent as SVG } from '@/assets/images/vara-logo.svg'
import clsx from 'clsx'
import styles from './logo.module.scss'

export function Logo({ className }: BaseComponentProps) {
  return (
    <Link to="/" className={clsx(styles.link, className)}>
      <SVG className={styles.logo} />
    </Link>
  )
}
