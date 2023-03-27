import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const Title = styled(Typography)(props => ({
  fontSize: '30px',
  fontWeight: 'bold',
  color: props.theme.palette.text.primary
}))

export const Subtitle = styled(Typography)(props => ({
  fontSize: '20px',
  fontWeight: 600,
  color: props.theme.palette.text.secondary
}))
