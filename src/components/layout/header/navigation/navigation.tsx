import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './navigation.module.scss';

const nav = [
  {
    id: 'home',
    url: '/',
    label: 'Play',
  },
  {
    id: 'leaderboard',
    url: '/leaderboard',
    label: 'Leaderboard',
  },
];

export function Navigation() {
  const { pathname } = useLocation();
  return (
    <div>
      <nav>
        <ul className={styles.list}>
          {nav.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                className={clsx(styles.link, link.url === pathname ? styles.active : styles.inactive)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
