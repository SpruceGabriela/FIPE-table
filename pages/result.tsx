import { Pill } from '@/components/Pill/Pill.styles'
import { Stack } from '@mui/system'
import { useRouter } from "next/router"
import { Title, Subtitle } from '../components/Typography/Typography.styles'

export default function Result() {
  const router = useRouter()
  const {
  query: { data },
  } = router

  if(data && typeof data === "string") {
    const parsedData = JSON.parse(data);

    return (
      <Stack spacing={2} alignItems="center">
        <Title variant="h1">
          Tabela Fipe: {parsedData?.brand} {parsedData?.model} {parsedData?.year}
        </Title>
        <Pill variant="filled" color="secondary" label={parsedData?.price} />
        <Subtitle variant="caption" sx={{ fontSize: '15px' }}>
          Este é o preço de compra do veículo
        </Subtitle>
      </Stack>
    )
  }

  return (
    <Stack spacing={2} alignItems="center">
      <Title variant="h1">Oops! Ocorreu um erro!</Title>
      <Subtitle variant="caption" sx={{ fontSize: '15px' }}>
        Não foi possível carregar os dados.
      </Subtitle>
    </Stack>
  )
}
