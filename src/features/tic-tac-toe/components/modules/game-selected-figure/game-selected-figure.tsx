import { PlayerIconCircle, PlayerIconCross } from '../../../assets';
import styles from './game-selected-figure.module.scss';

type GameSelectedFigureProps = BaseComponentProps & {};

export function GameSelectedFigure({ children }: GameSelectedFigureProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        {/* <PlayerIconCross /> */}
        <PlayerIconCircle />
      </div>
      <div className={styles.label}>
        <p>Your symbol</p>
      </div>
    </div>
  );
}
