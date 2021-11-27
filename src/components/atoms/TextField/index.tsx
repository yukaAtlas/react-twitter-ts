import { FC } from 'react'
import { default as MuiTextField, StandardTextFieldProps } from '@mui/material/TextField'

interface ITextFieldProps extends StandardTextFieldProps {}

export const TextField: FC<ITextFieldProps> = (props) => {
  return <MuiTextField {...props}>{props.children}</MuiTextField>
}
