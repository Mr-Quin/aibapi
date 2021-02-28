import { sleep } from '../utils'
import got from 'got'
import { Data, GeneralResponse } from '../api'

export type UrlOption = {
    delay?: number
    method?: 'get' | 'post'
    abort?: boolean
    responseType?: 'json' | 'raw'
    headers?: {
        Cookie?: string
        Host?: string
        Origin?: string
        Referer?: string
        'User-Agent'?: string
    }
}

const getUrl = <T extends GeneralResponse | Buffer>(url: string, options: UrlOption = {}) => async (
    searchParams: Data = {}
) => {
    const headers = options.headers ?? {}
    const delay = options.delay ?? 250
    const method = options.method ?? 'get'
    const responseType = options.responseType === 'raw' ? undefined : 'json'
    await sleep(delay)
    const response = await got[method](url, {
        headers,
        searchParams,
        responseType,
    })
    response.on('error', (err) => {
        throw err
    })
    if (response.statusCode !== 200) {
        throw new Error(
            `Fetch ${response.url} failed. Status: ${response.statusCode} ${response.statusMessage}`
        )
    }
    const biliStatusCode = response.headers['bili-status-code']
    return (responseType === 'json' ? response.body : response.rawBody) as T
}

export default getUrl
