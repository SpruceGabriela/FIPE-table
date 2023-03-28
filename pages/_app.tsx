import Layout from '@/components/Layout/Layout'
import GlobalStyle from '@/styles/theme/global'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FipeProvider } from '@/context/fipeContext'
import type { AppProps } from 'next/app'
import theme from '../styles/theme/default'
import { useRouter } from "next/router"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
	const isIndex = pathname === "/" ? theme.indexTheme : theme.resultTheme;

  return (
    <ThemeProvider theme={isIndex}>
      <QueryClientProvider client={client}>
        <FipeProvider>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </FipeProvider>
      </QueryClientProvider>
      <GlobalStyle />
      <CssBaseline />
    </ThemeProvider>
  )
}
