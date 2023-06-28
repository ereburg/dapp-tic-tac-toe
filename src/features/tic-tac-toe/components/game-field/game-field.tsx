import styles from './game-field.module.scss';
import { GameCell } from '../game-cell';

type GameFieldProps = BaseComponentProps & {};

export function GameField({ children }: GameFieldProps) {
  return (
    <div className={styles.grid}>
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
    </div>
  );
}
