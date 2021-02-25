import { UrlOption } from '../client/getUrl'
import { ApiAcceptedReturns, ApiKeyMaster, Arrayable, Data } from './index'

type RequestMethod = 'get' | 'post'

interface ApiConfig {
    method: RequestMethod
    require?: Arrayable<Arrayable<string>>
    optional?: Arrayable<Arrayable<string>>
    parents?: ApiKeyMaster[]
    headers?: Partial<UrlOption['headers']>
    action: (payload: any, options?: Partial<UrlOption>) => any
}

export default class Api<T extends ApiAcceptedReturns> {
    readonly name: ApiKeyMaster
    readonly method: ApiConfig['method']
    readonly require: ApiConfig['require']
    readonly optional: ApiConfig['optional']
    readonly parents: ApiConfig['parents']
    readonly headers: ApiConfig['headers']
    private readonly callback: ApiConfig['action']

    constructor(name: ApiKeyMaster, config: ApiConfig) {
        this.name = name
        this.method = config.method ?? 'get'
        this.require = config.require ?? []
        this.optional = config.optional ?? []
        this.parents = config.parents ?? []
        this.headers = config.headers ?? {}
        this.callback = config.action
    }

    get = (option?: Partial<UrlOption>) => async (payload: Data): Promise<T> => {
        return this.callback(payload, option)
    }
}
