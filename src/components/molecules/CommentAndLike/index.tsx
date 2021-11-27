import React from 'react'
import styled from 'styled-components'
import { ModeCommentOutlined, FavoriteBorderOutlined } from '@mui/icons-material'
import theme from 'src/theme'
import { IconButton, Typography } from 'src/components/atoms'

const CommentAndLikeRoot = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
`
const IconCounterWrapper = styled.div`
  display: flex;
  align-items: center;
`

const CommentAndLike = () => {
  return (
    <CommentAndLikeRoot>
      <IconCounterWrapper>
        <IconButton>
          <ModeCommentOutlined fontSize="small" />
        </IconButton>
        <Typography>0</Typography>
      </IconCounterWrapper>
      <IconCounterWrapper>
        <IconButton>
          <FavoriteBorderOutlined fontSize="small" />
        </IconButton>
        <Typography>0</Typography>
      </IconCounterWrapper>
    </CommentAndLikeRoot>
  )
}

export default CommentAndLike
