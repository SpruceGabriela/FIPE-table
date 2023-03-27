import { Container, Grid } from '@mui/material'
import { LayoutProps } from './Layout.types'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Grid
        container
        gap={2}
        flexDirection="column"
        alignItems="center"
        sx={{ marginTop: 10 }}
      >
        {children}
      </Grid>
    </Container>
  )
}

export default Layout
