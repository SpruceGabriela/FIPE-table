import { CarProps, ResponseProps } from '@/services/adapters/types'
import { getCar, getCarBrands, getCarModels, getYears } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from "next/router"
import { createContext, useState } from 'react'
import { FipeContextProps, FipeContextProviderProps } from './types'

export const FipeContext = createContext<FipeContextProps>(
  {} as FipeContextProps
)

export const FipeProvider = ({ children }: FipeContextProviderProps) => {
  const router = useRouter();
  const [brandCode, setBrandCode] = useState('')
  const [modelCode, setModelCode] = useState('')
  const [yearCode, setYearCode] = useState('')

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
    { enabled: brandCode !== '' }
  )

  const {
    data: yearsResponse,
    isLoading: isYearsLoading,
    isError: yearsHasError
  } = useQuery<ResponseProps[] | null>(
    ['years', modelCode],
    async () => {
      const response = await getYears(brandCode, modelCode)
      return response
    },
    { enabled: modelCode !== '' }
  )

  const {
    data: carResponse,
    // isLoading: isCarLoading,
    // isError: carHasError
  } = useQuery<CarProps | null>(
    ['car', yearCode],
    async () => {
      const response = await getCar(brandCode, modelCode, yearCode)
      return response
    },
    { enabled: yearCode !== '' }
  )

  const resetState = () => {
		setTimeout(() => {
      setBrandCode("");
      setModelCode("");
      setYearCode("");
    }, 2000)
	};

  const handleSubmit = () => {
		router.push({
      pathname: '/result',
      query: { data: JSON.stringify(carResponse) }
    }, '/result');
    resetState();
	};

  return (
    <FipeContext.Provider
      value={{
        brandsResponse,
        isBrandsLoading,
        brandsHasError,
        modelsResponse,
        isModelsLoading,
        modelsHasError,
        yearsResponse,
        isYearsLoading,
        yearsHasError,
        setBrandCode,
        setModelCode,
        setYearCode,
        handleSubmit
      }}
    >
      {children}
    </FipeContext.Provider>
  )
}
