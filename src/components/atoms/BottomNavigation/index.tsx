import React, { FC } from 'react'
import { BottomNavigation as MuiBottomNavigation, BottomNavigationProps } from '@mui/material'

interface IBottomNavigationProps extends BottomNavigationProps {}

export const BottomNavigation: FC<IBottomNavigationProps> = (props) => {
  return <MuiBottomNavigation {...props}>{props.children}</MuiBottomNavigation>
}
