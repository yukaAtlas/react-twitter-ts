import React, { FC } from 'react'
import { Typography as MuiTypography, TypographyProps } from '@mui/material'
import styled from 'styled-components'
import theme from 'src/theme'

const StyledTypography = styled(({ ...others }) => <MuiTypography {...others} />)`
  font-weight: ${(props): string | number => props.fontWeight || 'normal'};
  color: ${(props): string => props.color || theme.palette.text.primary};
`

interface ITypographyProps extends TypographyProps {
  fontWeight?: string | number
  color?: string
}

export const Typography: FC<ITypographyProps> = ({ color, fontWeight, children, ...others }) => {
  return (
    <StyledTypography fontWeight={fontWeight} color={color} {...others}>
      {children}
    </StyledTypography>
  )
}
