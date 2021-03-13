import { UrlOption } from '../client/getUrl'
import { ApiAcceptedReturns, ApiKeyMaster, Arrayable, Data } from './index'

type RequestMethod = 'get' | 'post'

interface ApiConfig {
    method?: RequestMethod
    require?: Arrayable<Arrayable<string>>
    optional?: Arrayable<Arrayable<string>>
    parents?: ApiKeyMaster[]
    headers?: Partial<UrlOption['headers']>
    defaultPayload?: Data
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
    readonly defaultPayload: ApiConfig['defaultPayload']
    private readonly shaper: ApiConfig['format']
    private readonly action: ApiConfig['action']

    constructor(name: ApiKeyMaster, config: ApiConfig) {
        this.name = name
        this.method = config.method ?? 'get'
        this.require = config.require ?? [] // required keys, will throw error if not present. [[a,b],c] means "c and one of a or b"
        this.optional = config.optional ?? [] // optional keys, default values will be used if not present
        this.parents = config.parents ?? [] // parent API (node) to be called before
        this.headers = config.headers ?? {} // headers to be passed into http request
        this.defaultPayload = config.defaultPayload ?? {}
        this.shaper = config.format // modifies the payload before checks and filters
        this.action = config.action // what to do with the payload
    }
    format = (payload: Data) => {
        if (this.shaper) return this.shaper(payload)
        return payload
    }
    get = (option?: Partial<UrlOption>) => async (payload: Data): Promise<T> => {
        return this.action(payload, option)
    }
}
