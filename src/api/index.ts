import memberApi from './member'
import videoApi from './video'
import { ApiKeyMaster } from '../types'

export type ApiList = typeof bilibiliApi

type Validation = { [k in ApiKeyMaster]: any }

const validateApi = <T>(t: T) => t

const bilibiliApi = {
    ...memberApi,
    ...videoApi,
}

validateApi<Validation>(bilibiliApi)

export default bilibiliApi
