import { createTheme } from '@mui/material'

export const customThemeColor = {
  grey: {
    light: '#f5f8fa',
    main: '#e6ecf1',
  },
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#1ca0f299',
      main: '#1ca0f2cc',
      dark: '#1ca0f2',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
})
export default theme
