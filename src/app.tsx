import './app.scss'
import { useApi, useAccount } from '@gear-js/react-hooks'
import { Routing } from './pages'
import { ApiLoader, Loader } from '@/components'
import { Footer, Header } from '@/components/layout'
import { withProviders } from '@/app/hocs'
import { useInitGame } from '@/features/tic-tac-toe/hooks/use-game'
import { useInitAccountFTBalance } from '@/features/tic-tac-toe/hooks/use-ft-balance'
import { LoadingError } from '@/components/loaders/loading-error'

function Component() {
  const { isApiReady } = useApi()
  const { isAccountReady } = useAccount()
  const { isGameReady, errorGame } = useInitGame()
  const { isFTReady, errorFT } = useInitAccountFTBalance()

  const isAppReady = isApiReady && isAccountReady
  const isUserReady = isGameReady && isFTReady
  const hasError = errorFT || errorGame

  return (
    <>
      <Header />
      <main>
        {isAppReady ? (
          <>
            {errorFT && (
              <LoadingError>
                <p>
                  Error in the FT contract :(
                  <br />
                  <small>See console logs for more info.</small>
                </p>
              </LoadingError>
            )}
            {errorGame && (
              <LoadingError>
                <p>
                  Error in the Game contract :(
                  <br />
                  <small>See console logs for more info.</small>
                </p>
              </LoadingError>
            )}
            {!hasError && isUserReady && <Routing />}
            {!hasError && !isUserReady && <Loader />}
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
