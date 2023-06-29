import clsx from 'clsx';
import styles from './game-field.module.scss';
import { GameCell } from '../game-cell';
import { IGameInstance } from '../../../types';
import { GameMark } from '../game-mark';

type GameFieldProps = BaseComponentProps & {
  game: IGameInstance;
};

export function GameField({ game }: GameFieldProps) {
  const board = game.board.cells.flat();

  return (
    <div className={styles.grid}>
      {board.map((cell, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <GameCell key={i}>
          {cell && <GameMark mark={cell} className={clsx(cell === game.player_mark && styles.active)} />}
        </GameCell>
      ))}
    </div>
  );
}
