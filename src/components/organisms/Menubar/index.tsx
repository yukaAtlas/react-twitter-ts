import React from 'react'
import { HomeOutlined, EmailOutlined, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from 'src/components/atoms'
import { ResponsiveContext } from 'src/context'
import { styled } from '@mui/system'
import { customThemeColor } from 'src/theme'
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'

const StyledMenubarRoot = styled(BottomNavigation)({
  height: 80,
  position: 'fixed',
  bottom: 0,
  width: '100vw',
  borderTop: `2px solid ${customThemeColor.grey.light}`,
})

const Menubar = () => {
  return (
    <ResponsiveContext.Consumer>
      {({ isMobile }) => {
        if (isMobile) {
          return (
            <StyledMenubarRoot>
              <BottomNavigationAction value="home" icon={<HomeOutlined color="primary" />} />
              <BottomNavigationAction icon={<EmailOutlined color="primary" />} />
              <BottomNavigationAction icon={<NotificationsOutlined color="primary" />} />
              <BottomNavigationAction icon={<SettingsOutlined color="primary" />} />
            </StyledMenubarRoot>
          )
        }

        return (
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <EmailOutlined />
              </ListItemIcon>
              <ListItemText>Messenger</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <NotificationsOutlined />
              </ListItemIcon>
              <ListItemText>Notifications</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsOutlined />
              </ListItemIcon>
              <ListItemText>Notifications</ListItemText>
            </MenuItem>
          </MenuList>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Menubar
