import Layout from '@/components/Layout/Layout'
import GlobalStyle from '@/styles/theme/global'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import theme from '../styles/theme/default'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.theme}>
      <GlobalStyle />
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
