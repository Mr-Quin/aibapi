// https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/other/bvID.md
const table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'
const elbat = {
    1: 13,
    2: 12,
    3: 46,
    4: 31,
    5: 43,
    6: 18,
    7: 40,
    8: 28,
    9: 5,
    A: 54,
    B: 20,
    C: 15,
    D: 8,
    E: 39,
    F: 57,
    G: 45,
    H: 36,
    J: 38,
    K: 51,
    L: 42,
    M: 49,
    N: 52,
    P: 53,
    Q: 7,
    R: 4,
    S: 9,
    T: 50,
    U: 10,
    V: 44,
    W: 34,
    X: 6,
    Y: 25,
    Z: 1,
    a: 26,
    b: 29,
    c: 56,
    d: 3,
    e: 24,
    f: 0,
    g: 47,
    h: 27,
    i: 22,
    j: 41,
    k: 16,
    m: 11,
    n: 37,
    o: 2,
    p: 35,
    q: 21,
    r: 17,
    s: 33,
    t: 30,
    u: 48,
    v: 23,
    w: 55,
    x: 32,
    y: 14,
    z: 19,
}
const s = [11, 10, 3, 8, 4, 6]
const xor = 177451812n
const add = 8728348608n
const base = ['B', 'V', '1', ' ', ' ', '4', ' ', '1', ' ', '7', ' ', ' ']

export const isValidBvid = (bvid: string): boolean => bvid.match(/^BV[A-Za-z0-9]{10}$/) !== null

// does not return correct result for very big aid
export const bv2av = (bvid: string): number => {
    if (!isValidBvid(bvid)) throw TypeError('Invalid bvid')
    const r = s.reduce((acc, cur, i) => {
        const v = BigInt(elbat[<keyof typeof elbat>bvid[cur]])
        const va = v * 58n ** BigInt(i)
        return acc + va
    }, 0n)
    const result = (r - add) ^ xor
    if (result < 0) throw RangeError('Result aid is negative')
    return Number(result)
}

export const av2bv = (aid: number | bigint) => {
    if (aid < 0) throw RangeError('Aid cannot be negative')
    const x = (BigInt(aid) ^ xor) + add
    const a = [...base]
    s.forEach((v, i) => {
        const b = Math.floor(Number(x / 58n ** BigInt(i))) % 58
        a[v] = table[b]
    })
    return a.join('')
}
