import { ResponseProps } from '@/services/adapters/types'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export type FipeContextProps = {
  brandsResponse: ResponseProps[] | undefined | null
  isBrandsLoading: boolean
  brandsHasError: boolean
  modelsResponse: ResponseProps[] | undefined | null
  isModelsLoading: boolean
  modelsHasError: boolean
  yearsResponse: ResponseProps[] | undefined | null
  isYearsLoading: boolean
  yearsHasError: boolean
  setBrandCode: Dispatch<SetStateAction<string>>
  setModelCode: Dispatch<SetStateAction<string>>
  setYearCode: Dispatch<SetStateAction<string>>
}

export type FipeContextProviderProps = {
  children: ReactNode
}
