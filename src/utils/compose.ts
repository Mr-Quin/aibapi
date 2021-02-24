const compose = (...args: Function[]) => async (arg: any) => {
    return args.reduceRight(async (acc, fn) => {
        return await fn(await acc)
    }, arg)
}

export default compose
