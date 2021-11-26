import { styled } from '@mui/system'
import React from 'react'
import { AppBar, Typography } from 'src/components/atoms'

const StyledHeaderRoot = styled(AppBar)(({ theme }) => ({
  height: 55,
  padding: theme.spacing(2),
}))

const Header = () => {
  return (
    <StyledHeaderRoot position="static">
      <Typography fontWeight="bold">Home</Typography>
    </StyledHeaderRoot>
  )
}

export default Header
