import React, { FC } from 'react'
import { styled as MuiStyled } from '@mui/material/'
import { Divider as MuiDivider, DividerProps } from '@mui/material'
import { customTheme } from 'src/theme'

const StyledMuiDivider = MuiStyled(MuiDivider)({
  border: `1px solid ${customTheme.color.grey.main}`,
})

interface IDividerProps extends DividerProps {}

export const Divider: FC<IDividerProps> = (props) => {
  return <StyledMuiDivider {...props} />
}
