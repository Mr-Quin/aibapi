import biliStore, { BiliCredential, BiliOptions } from '../store'
import { mapSeries } from 'async'
import { parseParamsVid } from '../helper'
import { getApiRecursive } from './getApi'
import bilibiliApi, { ApiList, ApiValue, ApiValues, Data, ExtractGeneric } from '../api'

export type RequestAcceptedInput = ApiValue[] | [ApiValue] | ApiValue
export type ApiSelector<T> = (apiList: ApiList) => T
export type Response<T extends ApiValues> = T extends ApiValue
    ? ExtractGeneric<T>
    : T extends [...ApiValue[]]
    ? {
          [I in keyof T]: ExtractGeneric<T[I]>
      } & { length: T['length'] }
    : never

export const biliConfig = (options: Partial<BiliCredential & BiliOptions>) => {
    biliStore.setState({ ...options })
}

/**
 * @param selector A function which returns one or more APIs from the apiList object
 * @param params The search parameters passed into each request
 */
export const biliRequest = async <ApiSlice extends RequestAcceptedInput>(
    selector: ApiSelector<ApiSlice>,
    params: Data = {}
): Promise<Response<ApiSlice>> => {
    const cache = { ...parseParamsVid(params) }
    const api = selector(bilibiliApi)

    if (Array.isArray(api)) {
        return (await mapSeries(api, async (target: ApiValue) => {
            return await getApiRecursive(target)(parseParamsVid(params), cache)
        })) as Response<ApiSlice>
    } else {
        return (await getApiRecursive(api as ApiValue)(
            parseParamsVid(params),
            cache
        )) as Response<ApiSlice>
    }
}
