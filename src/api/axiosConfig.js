import axios from "axios"

/**
 * Returns true if input string is a valid url.
 * Returns false other wise
 * @param input
 * @returns {boolean}
 */
export const isHyperlink = (input) => {
  try {
    return !! new URL(input, input)
  } catch (_) {
    return false
  }
}

const BASE_URL = process.env.DOTNET_SERVER_URL

const AXIOS_BASE = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
  })

const JSON_CLIENT = isHyperlink(BASE_URL) ? AXIOS_BASE : false

export default JSON_CLIENT
