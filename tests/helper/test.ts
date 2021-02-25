import { generateReferer, parseParamsVid } from '../../src/helper'
import { expect } from 'chai'

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

describe('Referrer maker tests', () => {
    it('works with bvid', () => {
        const result = generateReferer({ bvid: 'BV1xx411c7ub' })
        expect(result)
            .to.have.property('referer')
            .to.equal('https://www.bilibili.com/video/BV1xx411c7ub')
    })
    it('works with aid', () => {
        const result = generateReferer({ aid: '2233' })
        expect(result).to.have.property('referer').to.equal('https://www.bilibili.com/video/av2233')
    })
    it('works with mid', () => {
        const result = generateReferer({ mid: '79' })
        expect(result).to.have.property('referer').to.equal('https://space.bilibili.com/79')
    })
    it('works without ids', () => {
        const result = generateReferer({})
        expect(result).to.deep.equal({})
    })
})
