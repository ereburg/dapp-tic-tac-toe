import styles from './game-countdown.module.scss';
import { GameMark } from '../game-mark';
import { Mark } from '../../../types';

type GameCountdownProps = BaseComponentProps & {
  mark: Mark;
  timer: string;
};

export function GameCountdown({ mark, timer }: GameCountdownProps) {
  return (
    <div className={styles.wrapper}>
      <div className="">
        <GameMark mark={mark} className={styles.mark} />
      </div>
      <div className={styles.text}>Your turn</div>
      <div className={styles.timer}>{timer}</div>
    </div>
  );
}
