import biliStore, { BiliCredential, BiliOptions } from '../store'
import { parseParamsVid } from '../helper'
import { reduce } from 'async'
import logger from '../service/logger'
import { getApiRecursive } from './getApi'
import bilibiliApi, { ApiList, ApiReturns, ApiValues, Data } from '../api'

export const biliConfig = (options: Partial<BiliCredential & BiliOptions>) => {
    biliStore.setState({ ...options })
}

// not used for now
export type ApiSelector<T> = (apiList: ApiList) => T

export const biliRequest = async <ApiSlice extends ApiValues>(
    selector: ApiSelector<ApiSlice>,
    params: Data = {}
): Promise<ApiReturns> => {
    const cache = { ...parseParamsVid(params) }
    const api: ApiValues = selector(bilibiliApi)
    const targets = Array.isArray(api) ? api : [api]
    return (reduce(targets, {}, async (acc, target) => {
        const result = await getApiRecursive(target)(parseParamsVid(params), cache)
        logger.debug(`Target "${JSON.stringify(target.name)}", result: ${JSON.stringify(result)}`)
        return { ...acc, ...{ [target.name]: result } }
    }) as unknown) as ApiReturns
}
