import axios from "axios"

const JSON_CLIENT = axios.create({
  baseURL: 'https://localhost:5001',
  timeout: 3000,
  rejectUnauthorized: false,
})

export default JSON_CLIENT
