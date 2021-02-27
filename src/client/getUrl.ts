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

const getUrl = (url: string, options: UrlOption = {}) => async (searchParams: Data = {}) => {
    const headers = options.headers ?? {}
    const delay = options.delay ?? 250
    const method = options.method ?? 'get'
    const responseType = options.responseType === 'raw' ? undefined : 'json'

    await sleep(delay)
    const response = await got[method](url, {
        headers: {
            ...headers,
        },
        searchParams: {
            ...searchParams,
        },
        responseType,
    })
    response.on('error', (err) => {
        throw new Error(`Fetch ${response.url} failed. ${err}`)
    })
    if (response.statusCode !== 200) {
        throw new Error(
            `Fetch ${response.url} failed. Status: ${response.statusCode} ${response.statusMessage}`
        )
    }
    return responseType === 'json' ? response.body : response.rawBody
}

export default getUrl
