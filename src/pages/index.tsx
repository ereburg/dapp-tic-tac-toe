import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Leaderboard } from './leaderboard';

const routes = [
  { path: '/', Page: Home },
  { path: '/leaderboard', Page: Leaderboard },
];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
