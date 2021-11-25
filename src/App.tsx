import React, { lazy, Suspense } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Loading } from 'src/components/molecules'

const AccountPage = lazy(() => import('src/components/pages/account'))
const HomePage = lazy(() => import('src/components/pages/home'))

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Suspense fallback={<Loading />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/account" component={AccountPage} />
            </Suspense>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
