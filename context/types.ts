import { ResponseProps } from '@/services/adapters/types'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export type FipeContextProps = {
  brandsResponse: ResponseProps[] | undefined | null
  isBrandsLoading: boolean
  brandsHasError: boolean
  setBrandCode: Dispatch<SetStateAction<string>>
}

export type FipeContextProviderProps = {
  children: ReactNode
}
