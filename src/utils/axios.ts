import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = ''

const axios = Axios.create({
  baseURL,
  timeout: 20 * 1000
})

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

axios.interceptors.response.use(
  (config) => config,
  (err) => {
    if (err.response?.data) {
      const code = err.response.status
      const msg = err.response.data.message
      ElMessage.error(`Code:${code},Message:${msg}`)
      console.error(`[Axios Erro]`, err.response)
    } else {
      ElMessage.error(`${err}`)
    }
    return Promise.reject(err)
  }
)

export default axios
