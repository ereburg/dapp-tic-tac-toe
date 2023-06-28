import { ColumnLeft, ColumnRight, ColumnsContainer } from '../../common/columns';
import { GradientTitle, HelpDescription } from '../../common/typography';
import styles from './game.module.scss';
import { GameField } from '../game-field';
import { GameSelectedFigure } from '../game-selected-figure';

type GameProps = BaseComponentProps & {};

export function Game({ children }: GameProps) {
  return (
    <ColumnsContainer>
      <ColumnLeft>
        <GradientTitle>Tic Tac Toe game</GradientTitle>
        <HelpDescription>
          <p>Players take turns making their moves. Make sure to complete your turn before the timer runs out.</p>
        </HelpDescription>
      </ColumnLeft>
      <ColumnRight className={styles.field}>
        <GameField />

        <div className={styles.choose}>
          <GameSelectedFigure />
        </div>
      </ColumnRight>
    </ColumnsContainer>
  );
}