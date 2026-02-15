import axios from 'axios'

export const Baseurl = 'http://localhost:3000'

const api = axios.create({
  baseURL: Baseurl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default api
