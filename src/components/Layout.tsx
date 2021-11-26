import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from '@mui/material'
import { Helmet } from 'react-helmet'
import Header from 'src/components/organisms/Header'
import Menubar from 'src/components/organisms/Menubar'
import { ResponsiveContext } from 'src/context'
import theme from 'src/theme'

const ChildrenRoot = styled.div`
  max-width: ${theme.breakpoints.values.sm}px;
  width: 100%;
  margin: 0 auto;
`

interface ILayoutProps {
  title?: string
  children?: JSX.Element
}

const Layout = ({ children, title = 'react-twitter-ts' }: ILayoutProps): JSX.Element => {
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ResponsiveContext.Provider value={{ isMobile: isSmScreen }}>
        <ChildrenRoot>
          <Header />
          {children}
        </ChildrenRoot>
        <Menubar />
      </ResponsiveContext.Provider>
    </>
  )
}

export default Layout
