import { ColumnLeft, ColumnRight, ColumnsContainer } from '../columns';
import { GradientTitle, HelpDescription } from '../typography';
import styles from './game.module.scss';
import { GameField } from '../game-field';

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
      <ColumnRight>
        <GameField />
      </ColumnRight>
    </ColumnsContainer>
  );
}
