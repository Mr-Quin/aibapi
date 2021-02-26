import biliStore, { BiliCredential, BiliOptions } from '../store'
import { parseParamsVid } from '../helper'
import { mapSeries } from 'async'
import logger from '../service/logger'
import { getApiRecursive } from './getApi'
import bilibiliApi, { ApiList, ApiValue, ApiValues, Data, ExtractGeneric } from '../api'

export const biliConfig = (options: Partial<BiliCredential & BiliOptions>) => {
    biliStore.setState({ ...options })
}

export type RequestAcceptedInput = ApiValue[] | [ApiValue] | ApiValue
export type ApiSelector<T> = (apiList: ApiList) => T
export type RequestReturn<T extends ApiValues> = T extends ApiValue
    ? ExtractGeneric<T>
    : T extends [...ApiValue[]]
    ? {
          [I in keyof T]: ExtractGeneric<T[I]>
      } & { length: T['length'] }
    : never

export const biliRequest = async <ApiSlice extends RequestAcceptedInput>(
    selector: ApiSelector<ApiSlice>,
    params: Data = {}
): Promise<RequestReturn<ApiSlice>> => {
    const cache = { ...parseParamsVid(params) }
    const api: RequestAcceptedInput = selector(bilibiliApi)
    if (Array.isArray(api)) {
        return (await mapSeries(api, async (target) => {
            const result = await getApiRecursive(target)(parseParamsVid(params), cache)
            logger.debug(
                `Target "${JSON.stringify(target.name)}", result: ${JSON.stringify(result)}`
            )
            return result
        })) as RequestReturn<ApiSlice>
    } else {
        const result = await getApiRecursive(api)(parseParamsVid(params), cache)
        logger.debug(`Target "${JSON.stringify(api.name)}", result: ${JSON.stringify(result)}`)
        return result as RequestReturn<ApiSlice>
    }
}
