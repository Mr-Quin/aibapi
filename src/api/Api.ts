import { UrlOption } from '../client/getUrl'
import { ApiAcceptedReturns, ApiKeyMaster, Arrayable, Data } from './index'
import biliStore from '../store'

type RequestMethod = 'get' | 'post'

interface ApiConfig {
    method?: RequestMethod
    require?: Arrayable<Arrayable<string>>
    optional?: Arrayable<Arrayable<string>>
    parents?: ApiKeyMaster[]
    headers?: Partial<UrlOption['headers']>
    intercept?: (payload: Data) => Data
    format?: (payload: Data) => Data
    action: (payload: any, options?: Partial<UrlOption>) => any
}

export default class Api<T extends ApiAcceptedReturns> {
    readonly name: ApiKeyMaster
    readonly method: ApiConfig['method']
    readonly require: ApiConfig['require']
    readonly optional: ApiConfig['optional']
    readonly parents: ApiConfig['parents']
    readonly headers: ApiConfig['headers']
    private readonly _intercept: ApiConfig['intercept']
    private readonly _format: ApiConfig['format']
    private readonly _get: ApiConfig['action']

    constructor(name: ApiKeyMaster, config: ApiConfig) {
        this.name = name
        this.method = config.method ?? 'get'
        this.require = config.require ?? [] // required keys, will throw error if not present. [[a,b],c] means "c and one of a or b"
        this.optional = config.optional ?? [] // optional keys, default values will be used if not present
        this.parents = config.parents ?? [] // parent API (node) to be called before
        this.headers = config.headers ?? {} // headers to be passed into http request
        this._intercept = config.intercept // modifies payload right before sending out the request
        this._format = config.format // modifies the payload before checks and filters
        this._get = config.action // what to do with the payload
    }
    intercept = (payload: Data) => {
        if (this._intercept) return this._intercept(payload)
        return payload
    }
    format = (payload: Data) => {
        if (this._format) return this._format(payload)
        return payload
    }
    get = (option?: Partial<UrlOption>) => async (payload: Data): Promise<T> => {
        return this._get(payload, option)
    }
}
