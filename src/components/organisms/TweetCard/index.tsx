import styled from 'styled-components'
import { Avatar, Typography, Divider } from 'src/components/atoms'
import CommentAndLike from 'src/components/molecules/CommentAndLike'
import theme, { customTheme } from 'src/theme'

const TweetCardRoot = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
`

export const TweetCard = () => {
  return (
    <>
      <TweetCardRoot>
        <Avatar />
        <div>
          <Typography fontWeight="bold">abcd</Typography>
          <Typography variant="caption" color={customTheme.color.grey.dark}>
            abcd
          </Typography>
          <Typography>asdfasdfasdfasdfasf asdfsdfsdfs</Typography>
          <CommentAndLike />
        </div>
      </TweetCardRoot>
      <Divider />
    </>
  )
}
