import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  TextField
} from '@mui/material'
import { Box, Stack } from '@mui/system'
import { Title, Subtitle } from '../components/Typography/Typography.styles'

export default function Home() {
  return (
    <>
      <Title variant="h1">Tabela Fipe</Title>
      <Subtitle variant="h3">
        Consulte o valor de um veículo de forma gratuita
      </Subtitle>
      <Card sx={{ minWidth: 600, padding: 4 }}>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              maxWidth: 500,
              width: '100%'
            }}
            component="form"
          >
            <Stack spacing={2}>
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={params => <TextField {...params} label="Marca" />}
              />
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={params => <TextField {...params} label="Modelo" />}
              />
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={params => <TextField {...params} label="Ano" />}
              />
              <Button
                variant="contained"
                type="button"
                key="validateButton"
                size="large"
                sx={{
                  width: 'max-content',
                  alignSelf: 'center',
                  textTransform: 'capitalize'
                }}
              >
                Consultar preço
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}
