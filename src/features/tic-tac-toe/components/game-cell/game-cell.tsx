import styles from './game-cell.module.scss';

type GameFieldProps = BaseComponentProps & {};

export function GameCell({ children }: GameFieldProps) {
  return <div className={styles.cell}>content</div>;
}
