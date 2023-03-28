import { Roboto } from '@next/font/google'
import { createTheme } from '@mui/material/styles'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

const indexTheme = createTheme({
	palette: {
		primary: {
			main: "#5d19bf",
		},
		secondary: {
			main: "#28a38c",
		},
		background: {
			default: "#f9f6fc",
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
});

const resultTheme = createTheme({
	palette: {
		secondary: {
			main: "#28a38c",
		},
		background: {
			default: "#dcf5f2",
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
});

export default { indexTheme, resultTheme }
