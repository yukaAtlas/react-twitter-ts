import React, { FC } from 'react'
import { Typography as MuiTypography, TypographyProps } from '@mui/material'
import styled from 'styled-components'

const StyledTypography = styled(({ ...others }) => <MuiTypography {...others} />)`
  font-weight: ${(props): string | number => props.fontWeight || 'normal'};
`

interface ITypographyProps extends TypographyProps {
  fontWeight?: string | number
}

export const Typography: FC<ITypographyProps> = (props) => {
  return (
    <StyledTypography fontWeight={props.fontWeight} {...props}>
      {props.children}
    </StyledTypography>
  )
}
