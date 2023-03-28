import { ResponseProps } from '@/services/adapters/types'
import { getCarBrands, getCarModels } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { createContext, useState } from 'react'
import { FipeContextProps, FipeContextProviderProps } from './types'

export const FipeContext = createContext<FipeContextProps>(
  {} as FipeContextProps
)

export const FipeProvider = ({ children }: FipeContextProviderProps) => {
  const [brandCode, setBrandCode] = useState('')
  const [modelCode, setModelCode] = useState('')

  const {
    data: brandsResponse,
    isLoading: isBrandsLoading,
    isError: brandsHasError
  } = useQuery<ResponseProps[] | null>(['brands'], async () => {
    const response = await getCarBrands()
    return response
  })

  const {
    data: modelsResponse,
    isLoading: isModelsLoading,
    isError: modelsHasError
  } = useQuery<ResponseProps[] | null>(
    ['models', brandCode],
    async () => {
      const response = await getCarModels(brandCode)
      return response
    },
    { enabled: brandCode !== '', }
  )

  return (
    <FipeContext.Provider
      value={{
        brandsResponse,
        isBrandsLoading,
        brandsHasError,
        modelsResponse,
        isModelsLoading,
        modelsHasError,
        setBrandCode,
        setModelCode
      }}
    >
      {children}
    </FipeContext.Provider>
  )
}
