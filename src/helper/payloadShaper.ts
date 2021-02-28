import { Data, PayloadRequirement } from '../api'
import pick from 'lodash/pick'

// check payload against requirements, throws error if missing requirements, else returns the payload unmodified
export const checkPayloadWith = (requirement: PayloadRequirement = []) => (
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
                      return acc && true
                  }
              } else {
                  return acc && Object.keys(params).includes(item)
              }
          }, true)
    if (!hasRequired) {
        throw new TypeError(
            `Missing parameters. Expected ${requirement}, got ${JSON.stringify(params, null)}`
        )
    }
    return params
}

// returns new payload object with only the needed keys
export const filterPayloadWith = (filter?: PayloadRequirement) => (params: Data): Data => {
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
