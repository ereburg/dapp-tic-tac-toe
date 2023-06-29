import { ColumnLeft, ColumnRight, ColumnsContainer } from '../../ui/columns';
import { GradientTitle, HelpDescription } from '../../ui/typography';
import styles from './game.module.scss';
import { GameField } from '../game-field';
import { GameInfoPlayerMark } from '../game-info-player-mark';
import { IGameInstance } from '../../../types';
import { GameCountdown } from '../game-countdown';

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
        <GameCountdown mark={game.player_mark} timer={game.last_time} />
      </ColumnLeft>
      <ColumnRight className={styles.field}>
        <GameField game={game} />

        <GameInfoPlayerMark mark={game.player_mark} className={styles.choose} />
      </ColumnRight>
    </ColumnsContainer>
  );
}
