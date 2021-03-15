import { generateReferer, parseParamsVid } from '../../src/helper'
import { expect } from 'chai'
import { av2bv, bv2av } from '../../src/helper'

const mixedId = {
    vid: 'BV1bW411t73v',
    bvid: 'BV1bW411t73v',
    aid: 17577699,
    randomProp: 'randomValue',
}

describe('Vid parser tests', () => {
    it('handles empty vid', () => {
        const result = parseParamsVid({})
        expect(result).to.deep.equal({})
    })
    it('handles aid', () => {
        const result = parseParamsVid({ vid: 2233 })
        expect(result).to.have.property('aid').to.equal(2233)
    })
    it('handles bvid', () => {
        const result = parseParamsVid({ vid: 'BV1xx411c7ub' })
        expect(result).to.have.property('bvid').to.equal('BV1xx411c7ub')
    })
    it('skips if given aid or bvid', () => {
        const result = parseParamsVid({ vid: 'invalid', bvid: 'BV1xx411c7ub', aid: 1 })
        expect(result).to.have.property('bvid').to.equal('BV1xx411c7ub')
        expect(result).to.have.property('aid').to.equal(1)
    })
    it('does not modify other properties', () => {
        const result = parseParamsVid(mixedId)
        expect(result).to.deep.equal(mixedId)
    })
    it('throws if invalid vid', () => {
        const fn1 = () => parseParamsVid({ vid: 'invalid' })
        const fn2 = () => parseParamsVid({ vid: '' })
        const fn3 = () => parseParamsVid({ vid: null })
        const fn4 = () => parseParamsVid({ vid: [] })
        const fn5 = () => parseParamsVid({ vid: {} })
        expect(fn1).to.throw(TypeError)
        expect(fn2).to.throw(TypeError)
        expect(fn3).to.throw(TypeError)
        expect(fn4).to.throw(TypeError)
        expect(fn5).to.throw(TypeError)
    })
})

const bvav = {
    BV11b41177a6: 47095838,
    BV12b411K7Xw: 49181263,
    BV12J411T7SD: 69168758,
    BV12W411o7ur: 30996821,
    BV137411k7iL: 85003482,
    BV14b411M7f3: 48985670,
    BV15E411K7Dj: 95267049,
    BV15E411y7pd: 73157337,
    BV15s411o7VF: 3375321,
    BV16J41187Td: 81266395,
    BV17J411R798: 76999194,
    BV17x411w7KC: 170001,
    BV18t411G7c9: 59432393,
    BV18t411V7Qn: 59103983,
    BV194411d7G4: 64246761,
    BV194411R7C8: 64579330,
    BV19x411p7YM: 12614979,
    BV1A441137rY: 56217647,
    BV1aE411g7PU: 94564088,
    BV1B741117m5: 99338821,
    BV1bE41177Qs: 93262079,
    BV1D4411h7DN: 52215944,
    BV1dW411e76j: 18874317,
    BV1Dx411k7ML: 8968544,
    BV1Fx411u7Fd: 15632373,
    BV1Hb411b7zu: 44970850,
    BV1ht411479Z: 41687843,
    BV1iJ4113781: 68341577,
    BV1Jb411y7dz: 42163549,
    BV1jt41167mj: 39460447,
    BV1jW411d7sj: 31198587,
    BV1KJ411i7vS: 78133183,
    BV1KW411Z7Pq: 31056591,
    BV1kx411B7qz: 11798193,
    BV1LW411u7wy: 21396040,
    BV1mK4y1C7Bz: 882584971,
    BV1mt411A7pw: 60876101,
    BV1mx411e7gq: 10539331,
    BV1o4411S7nU: 63579976,
    BV1o7411c7SF: 90448399,
    BV1ox411W7y4: 12786023,
    BV1pE411M7oS: 94638021,
    BV1Ps411S7DT: 2504042,
    BV1Px411h7wq: 11389363,
    BV1Q541167Qg: 455017605,
    BV1qJ41167wZ: 79539167,
    BV1r4411u7MM: 56478555,
    BV1rb411G7nX: 50306592,
    BV1s4411p77p: 54208443,
    BV1sb411b7Ng: 45011831,
    BV1TJ41137zh: 68245829,
    BV1TJ411Y7fA: 81253314,
    BV1ts411e7sL: 7517480,
    BV1Tx411a7yk: 11074704,
    BV1Tx411s7ia: 12819330,
    BV1Ub411A7Xr: 34940497,
    BV1uJ411Q78h: 77399343,
    BV1Ut411N792: 62848722,
    BV1ux411e7wM: 10942883,
    BV1Vx411G7wD: 14690354,
    BV1W4411P7mA: 55410992,
    BV1wb411m764: 43733491,
    BV1WJ411y7dt: 78740640,
    BV1ws411172v: 5388583,
    BV1wt411W7HA: 40484494,
    BV1xx411c7mD: 2,
    BV1Yt41177zA: 60420012,
    BV1yx411F7eh: 422127,
    BV1Zx411E7Fp: 13384333,
}

describe('Av Bv converter tests', () => {
    it('bv2av should throw range error if an invalid aid is generated', () => {
        const fn = () => bv2av('BV18E4o1k7UR')
        expect(fn).to.throw(RangeError)
    })
    it('bv2av should throw type error for invalid bvid', () => {
        const fn = () => bv2av('bv18E4o1k7UR')
        expect(fn).to.throw(TypeError)
    })
    it('av2bv should throw range error for negative aid', () => {
        const fn = () => av2bv(-1)
        expect(fn).to.throw(RangeError)
    })
    it('can encode and decode', () => {
        const before = [...Array(5000)].map(() => Math.floor(Math.random() * 1e10))
        const middle = before.map((v) => av2bv(v))
        const after = middle.map((v) => bv2av(v))
        expect(after).to.be.deep.equal(before)
    })
    it('decodes correctly', () => {
        const results = Object.keys(bvav).map((bv) => bv2av(bv))
        expect(results).to.deep.equal(Object.values(bvav))
    })
    it('encodes correctly', () => {
        const results = Object.values(bvav).map((av) => av2bv(av))
        expect(results).to.deep.equal(Object.keys(bvav))
    })
})

// describe('Referer maker tests', () => {
//     it('works with bvid', () => {
//         const result = generateReferer({ bvid: 'BV1xx411c7ub' })
//         expect(result).to.equal('https://www.bilibili.com/video/BV1xx411c7ub')
//     })
//     it('works with aid', () => {
//         const result = generateReferer({ aid: '2233' })
//         expect(result).to.equal('https://www.bilibili.com/video/av2233')
//     })
//     it('works with mid', () => {
//         const result = generateReferer({ mid: '79' })
//         expect(result).to.equal('https://space.bilibili.com/79')
//     })
//     it('works with random props', () => {
//         const result = generateReferer({ a: 1, b: null, c: '', d: undefined })
//         expect(result).to.equal(null)
//     })
//     it('works without ids', () => {
//         const result = generateReferer({})
//         expect(result).to.deep.equal(null)
//     })
// })
