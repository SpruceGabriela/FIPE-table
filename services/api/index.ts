import api from '..'
import { parseCarProps, parseResponseProps } from '../adapters'
import { ResponsePropsAPI } from '../adapters/types'
import { ResponseProps, CarProps } from './types'

export const getCarBrands = (): Promise<ResponseProps[] | null> =>
  api
    .get('/carros/marcas')
    .then(({ data }) =>
      data.map((item: ResponsePropsAPI) => parseResponseProps(item))
    )

const getCarModels = (brandCode: string): Promise<ResponseProps | null> =>
  api
    .get(`/carros/marcas/${brandCode}/modelos`)
    .then(({ data }) => parseResponseProps(data))

const getYears = (
  brandCode: string,
  model: string
): Promise<ResponseProps | null> =>
  api
    .get(`/carros/marcas/${brandCode}/modelos/${model}/anos`)
    .then(({ data }) => parseResponseProps(data))

const getCarYear = (
  brandCode: string,
  model: string,
  year: string
): Promise<CarProps | null> =>
  api
    .get(`/carros/marcas/${brandCode}/modelos/${model}/anos/${year}`)
    .then(({ data }) => parseCarProps(data))
