// check params against requirements, throw error if missing requirements, else return the params
import { Data, ParamRequirement } from '../api'
import pick from 'lodash/pick'

export const checkParamsWith = (requirement: ParamRequirement = []) => (
    params: Data = {}
): Data => {
    if (requirement.length === 0) return params
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
export const filterParamsWith = (filter?: ParamRequirement) => (params: Data): Data => {
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
