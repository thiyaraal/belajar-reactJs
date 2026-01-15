import { ENV } from "../config/env"


export const httpClient = {
  get: async <T>(url: string): Promise<T> => {
    const res = await fetch(`${ENV.API_BASE_URL}${url}`)

    if (!res.ok) {
      throw new Error('Network error')
    }

    return res.json()
  }
}
