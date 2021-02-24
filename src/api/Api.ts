import { UrlOption } from '../client/getUrl'

type RequestMethod = 'get' | 'post'

interface ApiConfig {
    method: RequestMethod
    require?: Array<string | string[]>
    optional?: Array<string | string[]>
    parents: string[]
    callback: (payload: any, options?: Partial<UrlOption>) => any
}

export default class Api<T> {
    readonly name: string
    readonly require: ApiConfig['require']
    readonly optional: ApiConfig['optional']
    readonly parents: ApiConfig['parents']
    private readonly callback: ApiConfig['callback']

    constructor(name: string, config: ApiConfig) {
        this.name = name
        this.require = config.require
        this.optional = config.optional
        this.parents = config.parents
        this.callback = config.callback
    }

    get = (option?: Partial<UrlOption>) => async (payload: any): Promise<T> => {
        return this.callback(payload, option)
    }
}
