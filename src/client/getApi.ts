import bilibiliApi, { ApiValue, Data } from '../api'
import biliStore from '../store'
import { compose, concatArray } from '../utils'
import { checkPayloadWith, filterPayloadWith } from '../helper'
import { isSignedIn } from '../util'

// TODO: omit the "parents" property and use only "require" to determine recursive path
// TODO: implement branching

export const getApiRecursive = (api: ApiValue) => async (
    payload: Data,
    cache: Data = {}
): Promise<Data> => {
    if (!api) throw new TypeError(`Invalid api "${api}"`)
    const target = api.name
    // if target is in cache, return cache
    if (cache[target]) {
        return cache[target]
    }
    const parent =
        api.parents?.find((key) => Object.keys(payload).includes(key)) ??
        api.parents?.find((key) => Object.keys(bilibiliApi).includes(key))
    if (!parent) {
        // root
        const result = await getApi(api, payload)
        cache[target] = result
        return result
    }
    // if parent is in cache, get api using cache. cache includes the initial params
    if (cache[parent]) {
        return getApi(api, cache)
    } else {
        cache[parent] = await getApiRecursive(bilibiliApi[parent])(payload, cache)
        return getApi(api, cache)
    }
}

// TODO: put all of this into Api.get()
export const getApi = async (api: ApiValue, payload: Data): Promise<Data> => {
    const { requestDelay, SESSDATA, referer, origin } = biliStore.getState()
    const userAgent = biliStore.getState()['user-agent']
    // const referer = generateReferer(params)
    return compose(
        api.get({
            delay: requestDelay,
            method: api.method,
            headers: {
                'Accept-Encoding': 'gzip, deflate, br',
                'User-Agent': userAgent,
                Accept: '*/*',
                Connection: 'keep-alive',
                Cookie: `SESSDATA=${SESSDATA}`,
                Origin: origin,
                Referer: referer,
                ...api.headers,
            },
        }),
        api.intercept,
        filterPayloadWith(concatArray(api.require, api.optional, api.parents)),
        checkPayloadWith(concatArray(api.require, api.parents)),
        api.format
    )(payload)
}
