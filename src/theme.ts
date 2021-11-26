import { createTheme } from '@mui/material'

export const customTheme = {
  color: {
    grey: {
      light: '#f5f8fa',
      main: '#e6ecf1',
    },
  },
  header: {
    height: '55px',
  },
  sidebar: {
    width: '200px',
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
})
export default theme
