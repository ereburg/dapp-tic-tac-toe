import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routing } from 'pages';
import { Header, Footer, ApiLoader, Loader } from 'components';
import { withProviders } from 'hocs';
import 'App.scss';
import { useInitGame } from './features/tic-tac-toe/hooks';

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();
  const isGameStateReady = useInitGame();

  const isAppReady = isApiReady && isAccountReady;

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
  );
}

export const App = withProviders(Component);
