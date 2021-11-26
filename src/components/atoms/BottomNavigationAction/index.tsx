import React, { FC } from 'react'
import { BottomNavigationAction as MuiBottomNavigationAction, BottomNavigationActionProps } from '@mui/material'

interface IBottomNavigationActionProps extends BottomNavigationActionProps {}

export const BottomNavigationAction: FC<IBottomNavigationActionProps> = (props) => {
  return <MuiBottomNavigationAction {...props}>{props.children}</MuiBottomNavigationAction>
}
