import useFipeContext from '@/hooks/useFipeContext'
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
  const {
    brandsResponse,
    isBrandsLoading,
    brandsHasError,
    modelsResponse,
    isModelsLoading,
    modelsHasError,
    yearsResponse,
    isYearsLoading,
    yearsHasError,
    setBrandCode,
    setModelCode,
    setYearCode,
    handleSubmit
  } = useFipeContext()

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
                options={brandsResponse ?? []}
                getOptionLabel={option => option?.name}
                noOptionsText="Selecione uma marca válida"
                onChange={(_, value) => setBrandCode(value?.code ?? '')}
                disabled={!brandsResponse || brandsHasError || isBrandsLoading}
                renderInput={params => <TextField {...params} label="Marca" />}
              />
              <Autocomplete
                disablePortal
                options={modelsResponse ?? []}
                getOptionLabel={option => option?.name}
                noOptionsText="Selecione um modelo válido"
                onChange={(_, value) => setModelCode(value?.code ?? '')}
                disabled={!modelsResponse || modelsHasError || isModelsLoading}
                renderInput={params => <TextField {...params} label="Modelo" />}
              />
              {yearsResponse ? (
                <Autocomplete
                  disablePortal
                  options={yearsResponse}
                  getOptionLabel={option => option?.name}
                  noOptionsText="Selecione um ano válido"
                  onChange={(_, value) => setYearCode(value?.code ?? '')}
                  disabled={!yearsResponse || yearsHasError || isYearsLoading}
                  renderInput={params => <TextField {...params} label="Ano" />}
                />
              ) : null}
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
                onClick={handleSubmit}
                disabled={!brandsResponse || !modelsResponse || !yearsResponse}
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
