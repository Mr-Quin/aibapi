import { sleep } from '../utils'
import got from 'got'
import logger from '../service/logger'
import { Data, GeneralResponse } from '../api'

export type UrlOption = {
    delay?: number
    method?: 'get' | 'post'
    abort?: boolean
    headers?: {
        Cookie?: string
        Host?: string
        Origin?: string
        Referer?: string
        'User-Agent'?: string
    }
}

const getUrl = <T extends GeneralResponse>(url: string, options: UrlOption = {}) => async (
    searchParams: Data = {}
): Promise<T> => {
    const headers = options.headers ?? {}
    const delay = options.delay ?? 250
    const method = options.method ?? 'get'

    await sleep(delay)
    const response = await got[method]<T>(url, {
        headers: {
            ...headers,
        },
        searchParams: {
            ...searchParams,
        },
        responseType: 'json',
    })
    response.on('error', (err) => {
        throw new Error(`Fetch ${response.url} failed. ${err}`)
    })
    logger.info(`Getting ${url} with ${JSON.stringify(searchParams)} with delay ${delay}ms`)
    if (response.statusCode !== 200) {
        throw new Error(
            `Fetch ${response.url} failed. Status: ${response.statusCode} ${response.statusMessage}`
        )
    }
    const body = response.body
    // if (body.code && body.code !== 0) {
    //     throw new Error(
    //         `Fetch ${response.url} failed. Bilibili returned non-zero status code ${JSON.stringify(
    //             body,
    //             null,
    //             2
    //         )}`
    //     )
    // }
    return body
}

export default getUrl
