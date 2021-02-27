import { generateReferer, parseParamsVid } from '../../src/helper'
import { expect } from 'chai'
import { av2bv, bv2av } from '../../src/helper'

const videoMixed = {
    vid: 'BV1bW411t73v',
    bvid: 'BV1bW411t73v',
    aid: 17577699,
    avid: 'av17577699',
}

describe('Params parser tests', () => {
    it('handles empty vid', () => {
        const result = parseParamsVid({})
        expect(result).to.deep.equal({})
    })
    it('returns aid', () => {
        const result = parseParamsVid({ vid: 2233 })
        expect(result).to.have.property('aid').to.equal('2233')
        expect(result).to.have.property('avid').to.equal('2233')
    })
    it('returns bvid', () => {
        const result = parseParamsVid({ vid: 'BV1xx411c7ub' })
        expect(result).to.have.property('bvid').to.equal('BV1xx411c7ub')
    })
    it('handles mixed ids', () => {
        const result = parseParamsVid(videoMixed)
        expect(result).to.deep.equal(videoMixed)
    })
})

describe('Referer maker tests', () => {
    it('works with bvid', () => {
        const result = generateReferer({ bvid: 'BV1xx411c7ub' })
        expect(result)
            .to.have.property('Referer')
            .to.equal('https://www.bilibili.com/video/BV1xx411c7ub')
    })
    it('works with aid', () => {
        const result = generateReferer({ aid: '2233' })
        expect(result).to.have.property('Referer').to.equal('https://www.bilibili.com/video/av2233')
    })
    it('works with mid', () => {
        const result = generateReferer({ mid: '79' })
        expect(result).to.have.property('Referer').to.equal('https://space.bilibili.com/79')
    })
    it('works without ids', () => {
        const result = generateReferer({})
        expect(result).to.deep.equal({})
    })
})

const av = [
    84912579,
    77647937,
    47095838,
    20940691,
    12786023,
    59103983,
    37348483,
    21396040,
    32602181,
    13384333,
    3375321,
    43489507,
    78740640,
    93262079,
    44970850,
    56217647,
    7517480,
    48985670,
    26599242,
    34940497,
    10661363,
    1138702,
    8968544,
    49181263,
    26129343,
    20361018,
    55410992,
    68245829,
    11798193,
    25285016,
    94638021,
    69168758,
    12819330,
    20092649,
    5388583,
    85003482,
    41687843,
    18874317,
    39460447,
    50306592,
    40484494,
    60876101,
    97719335,
    45011831,
    91571097,
    30996821,
    99338821,
    78133183,
    19173944,
    69476059,
    96111005,
    17874269,
    9040269,
    79539167,
    10202297,
    32342010,
    5772629,
    94564088,
    50414556,
    9026639,
    43907533,
    14690354,
    64246761,
    73157337,
    59432393,
    52215944,
    81253314,
    76999194,
    12614979,
    42180342,
    77399343,
    58438518,
    90448399,
    73223206,
    62848722,
    11389363,
    95267049,
    46924192,
    10942883,
    30040230,
    2504042,
    90567632,
    31056591,
    422127,
    64579330,
    68341577,
    21709814,
    11074704,
    10539331,
    56478555,
    42163549,
    15780268,
    54208443,
    15632373,
    63579976,
    81266395,
    31198587,
    60420012,
    82260442,
    43733491,
    170001,
    455017605,
    882584971,
    2,
]
const bv = [
    null,
    null,
    'BV11b41177a6',
    null,
    'BV1ox411W7y4',
    'BV18t411V7Qn',
    null,
    'BV1LW411u7wy',
    null,
    'BV1Zx411E7Fp',
    'BV15s411o7VF',
    null,
    'BV1WJ411y7dt',
    'BV1bE41177Qs',
    'BV1Hb411b7zu',
    'BV1A441137rY',
    'BV1ts411e7sL',
    'BV14b411M7f3',
    null,
    'BV1Ub411A7Xr',
    null,
    null,
    'BV1Dx411k7ML',
    'BV12b411K7Xw',
    null,
    null,
    'BV1W4411P7mA',
    'BV1TJ41137zh',
    'BV1kx411B7qz',
    null,
    'BV1pE411M7oS',
    'BV12J411T7SD',
    'BV1Tx411s7ia',
    null,
    'BV1ws411172v',
    'BV137411k7iL',
    'BV1ht411479Z',
    'BV1dW411e76j',
    'BV1jt41167mj',
    'BV1rb411G7nX',
    'BV1wt411W7HA',
    'BV1mt411A7pw',
    null,
    'BV1sb411b7Ng',
    null,
    'BV12W411o7ur',
    'BV1B741117m5',
    'BV1KJ411i7vS',
    null,
    null,
    null,
    null,
    null,
    'BV1qJ41167wZ',
    null,
    null,
    null,
    'BV1aE411g7PU',
    null,
    null,
    null,
    'BV1Vx411G7wD',
    'BV194411d7G4',
    'BV15E411y7pd',
    'BV18t411G7c9',
    'BV1D4411h7DN',
    'BV1TJ411Y7fA',
    'BV17J411R798',
    'BV19x411p7YM',
    null,
    'BV1uJ411Q78h',
    null,
    'BV1o7411c7SF',
    null,
    'BV1Ut411N792',
    'BV1Px411h7wq',
    'BV15E411K7Dj',
    null,
    'BV1ux411e7wM',
    null,
    'BV1Ps411S7DT',
    null,
    'BV1KW411Z7Pq',
    'BV1yx411F7eh',
    'BV194411R7C8',
    'BV1iJ4113781',
    null,
    'BV1Tx411a7yk',
    'BV1mx411e7gq',
    'BV1r4411u7MM',
    'BV1Jb411y7dz',
    null,
    'BV1s4411p77p',
    'BV1Fx411u7Fd',
    'BV1o4411S7nU',
    'BV16J41187Td',
    'BV1jW411d7sj',
    'BV1Yt41177zA',
    null,
    'BV1wb411m764',
    'BV17x411w7KC',
    'BV1Q541167Qg',
    'BV1mK4y1C7Bz',
    'BV1xx411c7mD',
]

describe('Av Bv converter tests', () => {
    it('can encode and decode', () => {
        const before = [...Array(5000)].map((v) => Math.floor(Math.random() * 1e10))
        const after = before.map((v) => av2bv(v)).map((v) => bv2av(v))
        expect(after).to.be.deep.equal(before)
    })

    it('encodes correctly', () => {
        const results = bv.reduce((acc, cur, i) => {
            if (cur === null) return acc
            return { ...acc, [av2bv(av[i])]: cur }
        }, {})
        expect(Object.keys(results).toString()).to.deep.equal(Object.values(results).toString())
    })

    it('decodes correctly', () => {
        const results = bv.reduce((acc, cur, i) => {
            if (cur === null) return acc
            return { ...acc, [av[i]]: bv2av(cur) }
        }, {})
        expect(Object.keys(results).toString()).to.deep.equal(Object.values(results).toString())
    })
})
