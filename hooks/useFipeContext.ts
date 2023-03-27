import { useContext } from 'react'
import { FipeContext } from '../context/fipeContext'

const useFipeContext = () => {
  const contextValue = useContext(FipeContext)
  return contextValue
}

export default useFipeContext
