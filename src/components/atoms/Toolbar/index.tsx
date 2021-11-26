import React, { FC } from 'react'
import { Toolbar as MuiToolbar, ToolbarProps } from '@mui/material'

interface IToolbarProps extends ToolbarProps {}

export const Toolbar: FC<IToolbarProps> = (props) => {
  return <MuiToolbar {...props}>{props.children}</MuiToolbar>
}
