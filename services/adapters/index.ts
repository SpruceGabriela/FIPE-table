import { ResponsePropsAPI, ResponseProps, CarPropsAPI, CarProps } from './types'

export const parseResponseProps = (
  response: ResponsePropsAPI | null
): ResponseProps | null =>
  response
    ? {
        code: response.codigo,
        name: response.nome
      }
    : null

export const parseCarProps = (response: CarPropsAPI | null): CarProps | null =>
  response
    ? {
        vehicleType: response.TipoVeiculo,
        price: response.Valor,
        brand: response.Marca,
        model: response.Modelo,
        year: response.AnoModelo,
        fuelType: response.Combustivel,
        code: response.CodigoFipe,
        referenceMonth: response.MesReferencia,
        fuelInitial: response.SiglaCombustivel
      }
    : null
