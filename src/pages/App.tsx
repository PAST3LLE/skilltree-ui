import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const SkilltreePage = lazy(() =>
  import(/* webpackPrefetch: true,  webpackChunkName: "SkilltreePage" */ 'pages/Skilltree')
)
const Header = lazy(() => import(/* webpackPrefetch: true,  webpackChunkName: "HEADER" */ 'components/Header'))
const Navigation = lazy(() => import(/* webpackChunkName: "NAVIGATION" */ 'components/Navigation'))
const Popups = lazy(() => import(/* webpackPrefetch: true,  webpackChunkName: "POPUPS" */ 'components/Popups'))
const NotFound = lazy(() => import(/* webpackChunkName: "NOTFOUND" */ 'pages/Error/NotFound'))

import CookieBanner from 'components/Cookies/Banner'
import { FallbackLoader } from 'components/Loader'

export default function App() {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Popups />

      {/* HEADER */}
      <Header />
      {/* SIDE-NAV */}
      <Navigation mobileHide />

      <Routes>
        <Route path={`/`} element={<SkilltreePage />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>

      <CookieBanner message={'COOKIE SETTINGS'} />
    </Suspense>
  )
}
