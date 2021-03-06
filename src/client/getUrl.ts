import { sleep } from '../utils'
import got from 'got'
import { Data, GeneralResponse } from '../api'
import axios from 'axios'

export type UrlOption = {
    delay?: number
    method?: 'get' | 'post'
    abort?: boolean
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream' | undefined
    headers?: {
        'Accept-Encoding'?: string
        'User-Agent'?: string
        Accept?: string
        Connection?: string
        Cookie?: string
        Host?: string
        Origin?: string
        Referer?: string
    }
}

const getUrl = <T extends GeneralResponse | Buffer>(url: string, options: UrlOption = {}) => async (
    searchParams: Data = {}
) => {
    const headers = options.headers ?? {}
    const delay = options.delay ?? 250
    const method = options.method ?? 'get'
    const responseType = options.responseType ?? 'json'
    await sleep(delay)

    axios.interceptors.request.use(
        function (config) {
            // console.log(config)
            console.log('request success')
            return config
        },
        function (error) {
            // Do something with request error
            // console.log(error)
            console.log('request failed')
            return Promise.reject(error)
        }
    )

    axios.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            console.log('response success')
            return response
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            console.log(error)
            console.log('response failed')
            return Promise.reject(error)
        }
    )

    const response = await axios(url, {
        method,
        headers,
        params: searchParams,
        responseType,
        decompress: false,
    })
    // response.on('error', (err) => {
    //     throw err
    // })
    if (response.status !== 200) {
        throw new Error(
            `Fetch ${response.request} failed. Status: ${response.status} ${response.statusText}`
        )
    }
    const biliStatusCode = response.headers['bili-status-code']
    return response.data as T
}

export default getUrl
