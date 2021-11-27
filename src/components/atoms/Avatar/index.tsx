import { FC } from 'react'
import { default as MuiAvatar, AvatarProps } from '@mui/material/Avatar'

interface IAvatarProps extends AvatarProps {}

export const Avatar: FC<IAvatarProps> = ({ src, ...others }) => {
  return (
    <MuiAvatar
      src={
        src ||
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      }
      {...others}
    />
  )
}
