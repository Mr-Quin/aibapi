import * as Bilibili from '../types'
import logger from '../service/logger'
import bilibiliApi from '../api'
import biliStore from '../store/store'
import { compose, concatArray } from '../utils'
import { checkParamsWith, filterParamsWith } from './helpers'

// TODO: omit the "parents" property and use only "require" to determine recursive path
// TODO: implement branching

export const getApiRecursive = (target: keyof typeof bilibiliApi) => async (
    params: Bilibili.Data,
    cache: Bilibili.Data = {}
): Promise<Bilibili.Data> => {
    logger.debug(`Recursively getting "${target}"`)
    logger.debug(`Current cache: ${JSON.stringify(cache)}`)
    if (cache[target]) {
        logger.debug(`Target "${target}" found in cache, skipping recursion`)
        return cache[target]
    }
    const api = bilibiliApi[target]
    if (!api) throw new Error(`Requested target "${target}" does not exist.`)
    const parent =
        api.parents.find((key) => Object.keys(params).includes(key)) ??
        api.parents.find((key) => Object.keys(bilibiliApi).includes(key))
    logger.debug(
        `Getting "${target}"${
            parent ? ' via ' + '"' + parent + '"' : ''
        } with parameters ${JSON.stringify(params, null)}`
    )
    if (!parent) {
        // root
        logger.debug(`Target "${target}" has no parents`)
        const result = await getApi(api, params)
        cache[target] = result
        return result
    }
    // if parent is in the cache, get cache
    if (cache[parent]) {
        logger.debug(`Parent "${parent}" found in cache, skipping recursion`)
        return getApi(api, cache)
    } else {
        cache[parent] = await getApiRecursive(parent as keyof typeof bilibiliApi)(params, cache)
        return getApi(api, cache)
    }
}

export const getApi = async (api: Bilibili.ApiItem, params: Bilibili.Data) => {
    logger.debug(`Getting api: ${JSON.stringify(api, null)} with params: ${JSON.stringify(params)}`)
    const { requestDelay, SESSDATA, bili_jct } = biliStore.getState()
    const userAgent = biliStore.getState()['user-agent']
    return compose(
        api.get({
            delay: requestDelay,
            headers: {
                'user-agent': userAgent,
                cookie: `SESSDATA=${SESSDATA}`,
            },
        }),
        filterParamsWith(concatArray(api.require, api.optional, [api.parents])),
        checkParamsWith(concatArray(api.require, [api.parents]))
    )(params)
}
