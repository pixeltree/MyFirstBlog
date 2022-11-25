import axios from "axios"

const baseUrl = process.env.SERVER_URL || 'https://localhost:5001'

const JSON_CLIENT = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  rejectUnauthorized: false,
})

export default JSON_CLIENT
