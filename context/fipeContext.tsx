import { ResponseProps } from '@/services/adapters/types'
import { getCarBrands } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { createContext, useState } from 'react'
import { FipeContextProps, FipeContextProviderProps } from './types'

export const FipeContext = createContext<FipeContextProps>(
  {} as FipeContextProps
)

export const FipeProvider = ({ children }: FipeContextProviderProps) => {
  const [brandCode, setBrandCode] = useState('')

  const {
    data: brandsResponse,
    isLoading: isBrandsLoading,
    isError: brandsHasError
  } = useQuery<ResponseProps[] | null>(['brands'], async () => {
    const response = await getCarBrands()
    return response
  })

  return (
    <FipeContext.Provider
      value={{
        brandsResponse,
        isBrandsLoading,
        brandsHasError,
        setBrandCode
      }}
    >
      {children}
    </FipeContext.Provider>
  )
}
