import { pick } from 'lodash'
import * as Bilibili from '../types'

// check params against requirements, throw error if missing requirements, else return the params
const checkParamsWith = (requirement?: Bilibili.ParamRequirement) => (
    params: Bilibili.Data
): Bilibili.Data => {
    if (requirement === undefined) return params
    const isStringArray = requirement.every((item) => typeof item === 'string')
    const hasRequired = isStringArray
        ? requirement.every((p) => Object.keys(params).includes(p as string))
        : requirement.reduce((acc, item) => {
              if (Array.isArray(item)) {
                  if (item.length > 0) {
                      return acc && item.some((i) => Object.keys(params).includes(i))
                  } else {
                      return true
                  }
              } else {
                  return acc && Object.keys(params).includes(item)
              }
          }, true)
    if (!hasRequired) {
        throw new Error(
            `Missing parameters. Expected ${requirement}, got ${JSON.stringify(params, null)}`
        )
    }
    return params
}

// return new object with only the needed keys
const filterParamsWith = (filter?: Bilibili.ParamRequirement) => (
    params: Bilibili.Data
): Bilibili.Data => {
    if (filter === undefined || filter.length === 0) return params
    if (filter.every((item) => typeof item === 'string')) return pick(params, filter as string[])
    return filter.reduce((acc, key) => {
        if (Array.isArray(key)) {
            const firstKey = key.find((k) => Object.keys(params).includes(k))
            return firstKey ? { ...acc, [firstKey]: params[firstKey] } : acc
        } else if (Object.keys(params).includes(key)) {
            return { ...acc, [key]: params[key] }
        }
        return acc
    }, {})
}

const parseVidType = (videoId: string | number) => {
    return videoId.toString().startsWith('BV') ? 'bvid' : 'aid'
}

const parseVid = (videoId: string) => {
    return videoId.toLowerCase().startsWith('av') ? parseInt(videoId.slice(2), 10) : videoId
}

// parse vid into aid(avid) or bvid
const parseParamsVid = (params: Bilibili.Data) => {
    const vid = params['vid']
    if (vid === undefined) return params
    const type = parseVidType(vid)
    const avid = type === 'aid' ? vid : undefined
    return { ...params, [type]: parseVid(vid), [avid ? 'avid' : '']: avid }
}

export { filterParamsWith, checkParamsWith, parseParamsVid }
