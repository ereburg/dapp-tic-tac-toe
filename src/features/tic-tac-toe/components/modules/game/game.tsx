import { ColumnLeft, ColumnRight, ColumnsContainer } from '../../ui/columns';
import { GradientTitle, HelpDescription } from '../../ui/typography';
import styles from './game.module.scss';
import { GameField } from '../game-field';
import { GameSelectedFigure } from '../game-selected-figure';
import { IGameInstance } from '../../../types';

type GameProps = BaseComponentProps & {
  game: IGameInstance;
};

export function Game({ game }: GameProps) {
  return (
    <ColumnsContainer>
      <ColumnLeft>
        <GradientTitle>Tic Tac Toe game</GradientTitle>
        <HelpDescription>
          <p>Players take turns making their moves. Make sure to complete your turn before the timer runs out.</p>
        </HelpDescription>
      </ColumnLeft>
      <ColumnRight className={styles.field}>
        <GameField game={game} />

        <GameSelectedFigure mark={game.player_mark} className={styles.choose} />
      </ColumnRight>
    </ColumnsContainer>
  );
}
