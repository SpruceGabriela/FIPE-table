import { ThemeProvider, useTheme } from "@mui/material"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
