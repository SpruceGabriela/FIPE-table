export type ResponsePropsAPI = {
  codigo: string
  nome: string
}

export type CarPropsAPI = {
  TipoVeiculo: number
  Valor: string
  Marca: string
  Modelo: string
  AnoModelo: number
  Combustivel: string
  CodigoFipe: string
  MesReferencia: string
  SiglaCombustivel: string
}

export type ResponseProps = {
  code: string
  name: string
}

export type CarProps = {
  vehicleType: number
  price: string
  brand: string
  model: string
  year: number
  fuelType: string
  code: string
  referenceMonth: string
  fuelInitial: string
}
