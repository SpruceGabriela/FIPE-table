import Layout from '@/components/Layout/Layout'
import GlobalStyle from '@/styles/theme/global'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FipeProvider } from '@/context/fipeContext'
import type { AppProps } from 'next/app'
import theme from '../styles/theme/default'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.theme}>
      <QueryClientProvider client={client}>
        <FipeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FipeProvider>
      </QueryClientProvider>
      <GlobalStyle />
      <CssBaseline />
    </ThemeProvider>
  )
}
