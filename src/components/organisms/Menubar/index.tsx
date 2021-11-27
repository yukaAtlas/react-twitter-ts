import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HomeOutlined, EmailOutlined, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material'
import { styled as MuiStyled } from '@mui/material/'
import { Typography, IconButton } from 'src/components/atoms'
import { ResponsiveContext } from 'src/context'
import theme, { customTheme } from 'src/theme'

const StyledAside = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-top: 2px solid ${customTheme.color.grey.light};
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    position: absolute;
    flex-direction: column;
    align-items: baseline;
    width: ${customTheme.sidebar.width};
    top: ${theme.spacing(3)};
    left: ${theme.spacing(3)};
    bottom: unset;
    margin-top: ${customTheme.header.height};
    border-top: none;
  }
`

const StyledIconButton = MuiStyled(IconButton)(({ theme }) => ({
  gap: theme.spacing(2),
}))

const Menubar = () => {
  return (
    <ResponsiveContext.Consumer>
      {({ isMobile }) => {
        return (
          <StyledAside>
            <Link to="/">
              <StyledIconButton>
                <HomeOutlined />
                {!isMobile && <Typography>Home</Typography>}
              </StyledIconButton>
            </Link>
            <Link to="/">
              <StyledIconButton>
                <EmailOutlined />
                {!isMobile && <Typography>Message</Typography>}
              </StyledIconButton>
            </Link>
            <Link to="/">
              <StyledIconButton>
                <NotificationsOutlined />
                {!isMobile && <Typography>Notifications</Typography>}
              </StyledIconButton>
            </Link>
            <Link to="/">
              <StyledIconButton>
                <SettingsOutlined />
                {!isMobile && <Typography>Setting</Typography>}
              </StyledIconButton>
            </Link>
          </StyledAside>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Menubar
