import styles from './game-countdown.module.scss'
import { GameMark } from '../game-mark'
import { Mark } from '../../types'
import { withoutCommas } from '@gear-js/react-hooks'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { useGame } from '../../hooks'

type GameCountdownProps = BaseComponentProps & {
  mark: Mark
  timer: string
}

const Clock = ({ minutes, seconds }: CountdownRenderProps) => {
  return (
    <span>
      {`${minutes > 9 ? minutes : '0' + minutes}`}:
      {seconds > 9 ? seconds : '0' + seconds}
    </span>
  )
}

export function GameCountdown({ mark, timer }: GameCountdownProps) {
  const { setCountdown, countdown } = useGame()

  return (
    <div className={styles.wrapper}>
      <div className="">
        <GameMark mark={mark} className={styles.mark} />
      </div>
      <div className={styles.text}>Your turn</div>
      {countdown?.isActive && (
        <div className={styles.timer}>
          <Countdown
            date={Number(withoutCommas(timer)) + 30000}
            renderer={Clock}
            onComplete={() =>
              setCountdown((prev) => ({
                value: prev ? prev.value : '',
                isActive: false,
              }))
            }
            //   onStart={() =>
            //     setCountdown((prev) => ({ ...prev, isActive: true }))
            // }
          />
        </div>
      )}
    </div>
  )
}
