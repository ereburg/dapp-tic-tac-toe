import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Loader } from '@/components'

const routes = [
  { path: '/', Page: lazy(() => import('./home')) },
  { path: '/leaderboard', Page: lazy(() => import('./leaderboard')) },
]

export const Routing = () => {
  return (
    <Routes>
      {routes.map(({ path, Page }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<Loader />}>
              <Page />
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
