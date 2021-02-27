import { biliConfig, biliRequest } from '../../src'
import { decode } from '../../src/protobuf/parser'
import { config as env } from 'dotenv-flow'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)
const { expect } = chai

env()
const { SESSDATA, bili_jct } = process.env

// sign in
// biliConfig({ SESSDATA: SESSDATA, bili_jct: bili_jct })

describe('Unit tests', () => {
    it('gets aid', async () => {
        const aid = await biliRequest((api) => api.aid, { vid: 'BV1ax411c71N' })
        expect(aid).to.be.an('number')
    })
    it('gets following', async () => {
        const memberFollowing = await biliRequest((api) => api.memberFollowing, { vmid: 2571249 })
        expect(memberFollowing.data?.list).to.be.an('array')
    })
    it('gets danmu', async () => {
        const videoDanmaku = await biliRequest((api) => api.videoDanmakuRaw, {
            oid: 297324635,
            segment_index: 3,
        })
        console.log(videoDanmaku)
        decode(videoDanmaku)
        expect('').to.not.equal(undefined)
    })
    it('works', async () => {
        // const aid = [...Array(100)].map((v) => Math.floor(Math.random() * 1e8))
        // const getData = async () =>
        //     Promise.all(
        //         aid.map(async (v) => {
        //             return await biliRequest((api) => api.bvid, { vid: v })
        //         })
        //     )
        // const bvid = await getData()
    })
})
