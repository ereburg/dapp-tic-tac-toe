import { Leaderboard as Table } from '@/features/leaderboard'
import styles from './leaderboard.module.scss'
import { Heading } from '@/components/ui/heading'
import { Subheading } from '@/components/ui/subheading'
import { useAccount } from '@gear-js/react-hooks'
import { Button } from '@/components/ui/button'
import { Wallet } from '@/features/wallet'
import { Container } from '@/components/ui/container'

type LeaderboardProps = BaseComponentProps & {}

export default function PageLeaderboard({ children }: LeaderboardProps) {
  const { account } = useAccount()
  return (
    <Container>
      <div className={styles.container}>
        <header className={styles.header}>
          <Heading text="Tic Tac Toe game" />

          <div className={styles.subheadings}>
            {account ? (
              <Subheading text="A classic game of tic-tac-toe in which you compete not against a human, but against a smart contract. Play to win PPV." />
            ) : (
              <>
                <Subheading text="To register, follow the referral link provided by your friend or Vara Network community manager." />
                <Subheading text="If you are already registered connect your Substrate wallet to continue." />
              </>
            )}
          </div>

          {account ? <Button>Play</Button> : <Wallet />}
        </header>

        <div className={styles.content}>
          <Table />
        </div>
      </div>
    </Container>
  )
}
