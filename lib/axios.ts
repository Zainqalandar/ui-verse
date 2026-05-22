import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BASE_URL || 'https://expatcares.ae/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    if (!config.baseURL) config.baseURL = process.env.BASE_URL || 'https://expatcares.ae/api'
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      if (token && config.headers) config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default api
