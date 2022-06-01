import axios, { AxiosRequestConfig, Method } from 'axios'

async function makeRequest({
  url,
  method,
  data,
  config,
}: {
  url: string
  method: Method
  data?: string | FormData | Record<string, unknown>
  config?: AxiosRequestConfig
}) {
  try {
    return await axios({
      data,
      method,
      url,
      ...config,
    })
  } catch (err) {
    throw err
  }
}

export { makeRequest }
