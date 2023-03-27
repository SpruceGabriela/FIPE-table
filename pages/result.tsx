import { Pill } from "@/components/Pill/Pill.styles"
import { Stack } from '@mui/system'
import { Title, Subtitle } from '../components/Typography/Typography.styles'

export default function Result() {
  return (
    <Stack spacing={2} alignItems="center">
      <Title variant="h1">Tabela Fipe: Preco chevrolet cruze 2019</Title>
      <Pill
        variant="filled"
        color="secondary"
        label="R$ 987.000,00"
      />
      <Subtitle variant="caption" sx={{ fontSize: "15px" }}>Este é o preço de compra do veículo</Subtitle>
    </Stack>
  )
}
