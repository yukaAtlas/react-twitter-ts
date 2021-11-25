import React, { FC } from 'react'
import { CircularProgress as MuiCircularProgress, CircularProgressProps } from '@mui/material'

interface ICircularProgressProps extends CircularProgressProps {}

export const CircularProgress: FC<ICircularProgressProps> = (props) => {
  return <MuiCircularProgress {...props}>{props.children}</MuiCircularProgress>
}
