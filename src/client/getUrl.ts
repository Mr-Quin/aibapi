import { sleep } from '../utils'
import got from 'got'
import { Data, GeneralResponse } from '../api'
import axios from 'axios'

export type UrlOption = {
    delay?: number
    method?: 'get' | 'post'
    abort?: boolean
    decompress?: boolean
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
    const decompress = options.decompress ?? true
    const headers = options.headers ?? {}
    const delay = options.delay ?? 250
    const method = options.method ?? 'get'
    const responseType = options.responseType ?? 'json'
    await sleep(delay)

    const response = await axios(url, {
        method,
        headers,
        params: searchParams,
        responseType,
        decompress,
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
