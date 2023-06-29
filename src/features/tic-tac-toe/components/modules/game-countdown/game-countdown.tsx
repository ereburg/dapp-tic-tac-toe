import styles from './game-countdown.module.scss'
import { GameMark } from '../game-mark'
import { Mark } from '../../../types'
import { withoutCommas } from '@gear-js/react-hooks'
import Countdown, { CountdownRenderProps } from 'react-countdown'

type GameCountdownProps = BaseComponentProps & {
  mark: Mark
  timer: string
}

const Clock = ({ minutes, seconds, completed }: CountdownRenderProps) => {
  return (
    <span>
      {`${minutes > 9 ? minutes : '0' + minutes}`}:
      {seconds > 9 ? seconds : '0' + seconds}
    </span>
  )
}

export function GameCountdown({ mark, timer }: GameCountdownProps) {
  return (
    <div className={styles.wrapper}>
      <div className="">
        <GameMark mark={mark} className={styles.mark} />
      </div>
      <div className={styles.text}>Your turn</div>
      <div className={styles.timer}>
        <Countdown date={Number(withoutCommas(timer))} renderer={Clock} />
      </div>
    </div>
  )
}
