const compose = (...args: ((arg: any) => any)[]) => async (arg: any): Promise<any> => {
    return args.reduceRight(async (acc, fn) => {
        return await fn(await acc)
    }, arg)
}

export default compose
