import React from 'react'
import { Avatar, Button, Divider, TextField } from 'src/components/atoms'
import styled from 'styled-components'
import { styled as MuiStyled } from '@mui/material/'
import theme from 'src/theme'

const TweetCreateAreaRoot = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  padding: ${theme.spacing(2)} ${theme.spacing(3)};
  min-height: 150px;
`

const TweetFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`

const StyledTextField = MuiStyled(TextField)({
  flexGrow: 1,
  '.MuiInputBase-formControl': {
    height: '100%',
    '&:before': {
      borderBottom: 'none',
    },
    '&:after': {
      borderBottom: 'none',
    },
  },
})

const ButtonWrapper = styled.div`
  text-align: right;
`
const StyledPostButton = MuiStyled(Button)({
  height: 25,
  fontSize: 11,
})

export const TweetCreateArea = () => {
  return (
    <>
      <TweetCreateAreaRoot>
        <Avatar />
        <TweetFormWrapper>
          <StyledTextField variant="standard" placeholder="What\'s new?" />
          <ButtonWrapper>
            <StyledPostButton>Post</StyledPostButton>
          </ButtonWrapper>
        </TweetFormWrapper>
      </TweetCreateAreaRoot>
      <Divider />
    </>
  )
}
