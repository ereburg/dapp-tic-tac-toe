import './global.css'
import './app.scss'
import { useApi, useAccount } from '@gear-js/react-hooks'
import { Routing } from './pages'
import { ApiLoader, Loader } from '@/components'
import { Footer, Header } from '@/components/layout'
import { withProviders } from '@/app/hocs'
import { useInitGame } from '@/features/tic-tac-toe/hooks/use-game'
import { useInitAccountFTBalance } from '@/features/tic-tac-toe/hooks/use-ft-balance'

function Component() {
  const { isApiReady } = useApi()
  const { isAccountReady } = useAccount()
  const isGameStateReady = useInitGame()
  const isFTStateReady = useInitAccountFTBalance()

  const isAppReady = isApiReady && isAccountReady
  const isUserReady = isGameStateReady && isFTStateReady

  return (
    <>
      <Header />
      <main>
        {isAppReady ? (
          <>
            {isUserReady && <Routing />}
            {!isUserReady && <Loader />}
          </>
        ) : (
          <ApiLoader />
        )}
      </main>
      <Footer />
    </>
  )
}

export const App = withProviders(Component)
