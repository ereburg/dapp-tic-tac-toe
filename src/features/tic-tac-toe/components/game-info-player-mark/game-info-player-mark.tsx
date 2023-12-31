import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './game-info-player-mark.module.scss'
import { GameMark } from '../game-mark'
import type { Mark } from '../../types'
import { variantsPlayerMark } from '../../variants'

type GameSelectedFigureProps = BaseComponentProps & {
  mark: Mark
}

export function GameInfoPlayerMark({
  mark,
  className,
}: GameSelectedFigureProps) {
  const [hideOnComplete, setHideOnComplete] = useState(false)

  return !hideOnComplete ? (
    <motion.div
      initial="enter"
      animate="center"
      variants={variantsPlayerMark}
      onAnimationComplete={() => {
        setHideOnComplete(true)
      }}
      className={className}
    >
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <GameMark mark={mark} />
        </div>
        <div className={styles.label}>
          <p>Your symbol</p>
        </div>
      </div>
    </motion.div>
  ) : null
}
