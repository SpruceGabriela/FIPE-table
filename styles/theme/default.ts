import { Roboto } from '@next/font/google'
import { createTheme } from '@mui/material/styles'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#5d19bf',
      light: 'f9f6fc'
    },
    secondary: {
      main: '#28a38c',
      light: 'dcf5f2'
    },
    text: {
      primary: '#424242',
      secondary: '#9099ae'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
})

export default { theme }
