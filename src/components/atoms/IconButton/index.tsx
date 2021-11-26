import React, { FC } from 'react'
import { IconButton as MuiIconButton, IconButtonProps } from '@mui/material'

interface IIconButtonProps extends IconButtonProps {}

export const IconButton: FC<IIconButtonProps> = (props) => {
  return <MuiIconButton {...props}>{props.children}</MuiIconButton>
}
