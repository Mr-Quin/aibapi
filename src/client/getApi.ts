import bilibiliApi, { ApiValue, Data } from '../api'
import biliStore from '../store'
import { compose, concatArray } from '../utils'
import { checkParamsWith, filterParamsWith, generateReferer } from '../helper'

// TODO: omit the "parents" property and use only "require" to determine recursive path
// TODO: implement branching

export const getApiRecursive = (api: ApiValue) => async (
    params: Data,
    cache: Data = {}
): Promise<Data> => {
    if (!api) throw new Error(`Invalid api, api is ${api}`)
    // if target is in cache, return cache
    const target = api.name
    if (cache[target]) {
        return cache[target]
    }
    const parent =
        api.parents?.find((key) => Object.keys(params).includes(key)) ??
        api.parents?.find((key) => Object.keys(bilibiliApi).includes(key))

    if (!parent) {
        // root
        const result = await getApi(api, params)
        cache[target] = result
        return result
    }
    // if parent is in cache, return cache
    if (cache[parent]) {
        return getApi(api, cache)
    } else {
        cache[parent] = await getApiRecursive(bilibiliApi[parent])(params, cache)
        return getApi(api, cache)
    }
}

export const getApi = async (api: ApiValue, params: Data): Promise<Data> => {
    const { requestDelay, SESSDATA, referer, origin } = biliStore.getState()
    const userAgent = biliStore.getState()['user-agent']
    // const referer = generateReferer(params)
    return compose(
        api.get({
            delay: requestDelay,
            method: api.method,
            headers: {
                'User-Agent': userAgent,
                Cookie: `SESSDATA=${SESSDATA}`,
                Referer: referer,
                Origin: origin,
                ...api.headers,
            },
        }),
        filterParamsWith(concatArray(api.require, api.optional, api.parents)),
        checkParamsWith(concatArray(api.require, api.parents))
    )(params)
}
