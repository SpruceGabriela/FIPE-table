import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: `https://parallelum.com.br/fipe/api/v1`
})

export default api
