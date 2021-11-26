import React, { FC } from 'react'
import { AppBar as MuiAppBar, AppBarProps } from '@mui/material'

interface IAppBarProps extends AppBarProps {}

export const AppBar: FC<IAppBarProps> = (props) => {
  return <MuiAppBar {...props}>{props.children}</MuiAppBar>
}
