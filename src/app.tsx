import './global.css'
import './app.scss'
import { useApi, useAccount } from '@gear-js/react-hooks'
import { Routing } from './pages'
import { ApiLoader, Loader } from '@/components'
import { Footer, Header } from '@/components/layout'
import { withProviders } from '@/app/hocs'
import { useInitGame } from '@/features/tic-tac-toe/hooks'

function Component() {
  const { isApiReady } = useApi()
  const { isAccountReady } = useAccount()
  const isGameStateReady = useInitGame()

  const isAppReady = isApiReady && isAccountReady

  return (
    <>
      <Header />
      <main>
        {isAppReady ? (
          <>
            {isGameStateReady && <Routing />}
            {!isGameStateReady && <Loader />}
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
