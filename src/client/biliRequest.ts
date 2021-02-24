import biliStore, { BiliCredential, BiliOptions } from '../store/store'
import * as Bilibili from '../types'
import { parseParamsVid } from './helpers'
import { reduce } from 'async'
import logger from '../service/logger'
import { getApiRecursive } from './getApi'
import bilibiliApi, { ApiList } from '../api'
import { ApiKeyMaster } from '../types'

export const biliLogin = (credential: Partial<BiliCredential>, options?: Partial<BiliOptions>) => {
    biliStore.setState({ ...credential, ...options })
}

type Arrayable<T> = T | T[]

type ValueOf<T> = T[keyof T]

type ApiKeys = keyof ApiList

type ApiValues = ValueOf<ApiList>

type ApiSelector = (apiList: ApiList) => Arrayable<ApiValues>

type ApiReturns = { [k in keyof ApiList]: unknown }

export const biliRequest = async (
    selector: ApiSelector,
    params: Bilibili.Data
): Promise<ApiReturns> => {
    const cache = { ...parseParamsVid(params) }
    const api = selector(bilibiliApi)
    const targets = Array.isArray(api) ? api.map((a) => a.name) : [api.name]
    return (reduce(targets as ApiKeyMaster[], {}, async (acc, target) => {
        const result = await getApiRecursive(target)(parseParamsVid(params), cache)
        logger.debug(`Target "${target}", result: ${JSON.stringify(result)}`)
        return { ...acc, ...{ [target]: result } }
    }) as unknown) as ApiReturns
}
