// concat, but treats undefined as empty arrays
const concatArray = <T>(...args: Array<any>): T[] => {
    return args.reduce<T[]>((acc, cur) => {
        if (cur === undefined || cur === null) return acc
        if (!Array.isArray(cur)) return [...acc, cur]
        return [...acc, ...cur]
    }, [])
}

export default concatArray
