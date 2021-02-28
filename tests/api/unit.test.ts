import { biliConfig, biliRequest } from '../../src'
import { config as env } from 'dotenv-flow'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import biliStore from '../../src/store'
import { BiliRequestError } from '../../src/helper'
import { isSignedIn } from '../../src/util'

chai.use(chaiAsPromised)
const { expect } = chai

const video1 = {
    aid: 799441772,
    bvid: 'BV1hy4y1a7s6',
    title: '【超级小桀】2021年2月27日直播录像',
    cid: [303659129, 303667340, 303673393, 303773030, 303780120, 303786306],
}

const video2 = {
    aid: 801939815,
    bvid: 'BV14y4y177bP',
    title: '从开工厂到建戴森球指南—《异星工厂》《戴森球计划》鉴赏【就知道玩游戏128】',
    cid: 303812150,
}

const videoUndefined = {
    aid: 0,
    bvid: 'BV0000000000',
}
const member1 = {
    mid: 21038961,
    uname: 'MrBull0213',
}

const memberUndefined = {
    mid: 0,
}

describe('Unit tests', () => {
    before('sign in', () => {
        // sign in
        env()
        const { SESSDATA, bili_jct } = process.env
        biliConfig({ SESSDATA: SESSDATA, bili_jct: bili_jct })
    })
    afterEach('reset global error configuration to not throw', () => {
        biliStore.setState({ shouldThrow: false })
    })
    it('can sign in', async () => {
        const info = await biliRequest((api) => api.myInfo)
        expect(isSignedIn()).to.equal(true)
        expect(info).to.have.property('code').to.equal(0)
    })

    describe('Aid tests', () => {
        it('converts aid locally', async () => {
            const aid = await biliRequest((api) => api.aid, { vid: video1.bvid })
            expect(aid).to.eq(video1.aid)
        }).timeout(50)
        it('returns aid without converting', async () => {
            const aid = await biliRequest((api) => api.aid, { aid: video1.aid })
            expect(aid).to.eq(video1.aid)
        }).timeout(50)
    })

    describe('Bvid tests', () => {
        it('converts bvid locally', async () => {
            const bvid = await biliRequest((api) => api.bvid, { vid: video2.aid })
            expect(bvid).to.eq(video2.bvid)
        }).timeout(50)
        it('returns bvid without converting', async () => {
            const bvid = await biliRequest((api) => api.bvid, { bvid: video2.bvid })
            expect(bvid).to.eq(video2.bvid)
        }).timeout(50)
    })

    describe('VideoInfo tests', () => {
        it('works with aid and bvid', async () => {
            const info1 = await biliRequest((api) => api.videoInfo, { vid: video2.aid })
            const info2 = await biliRequest((api) => api.videoInfo, { vid: video2.bvid })
            expect(info1).to.have.property('data').to.be.an('object')
            expect(info1.data?.cid).to.eq(info2.data?.cid).to.eq(video2.cid)
        }).timeout(5000)
        it('returns code -400 for invalid vid', async () => {
            const info = await biliRequest((api) => api.videoInfo, { vid: videoUndefined.aid })
            expect(info).to.have.property('code').to.eq(-400)
        })
    })

    describe('VideoStream tests', () => {
        it('works with aid and bvid', async () => {
            const stream1 = await biliRequest((api) => api.videoStream, { vid: video1.aid })
            const stream2 = await biliRequest((api) => api.videoStream, { vid: video1.bvid })
            expect(stream1).to.be.an('array')
            stream1.forEach((v, i) => {
                expect(v).to.have.property('code').to.eq(stream2[i].code).to.eq(0)
            })
        }).timeout(15000)
        it('works with single and multi-part videos', async () => {
            const streamMulti = await biliRequest((api) => api.videoStream, video1)
            const streamSingle = await biliRequest((api) => api.videoStream, video2)
            expect(streamSingle).to.be.an('array').length(1)
            expect(streamMulti).to.be.an('array').length(video1.cid.length)
        }).timeout(15000)
        it('skips parent calls if given vid and cid', async () => {
            const stream = await biliRequest((api) => api.videoStream, video2)
            stream.forEach((v) => {
                expect(v).to.have.property('code').to.eq(0)
            })
        }).timeout(15000)
        it('respects qn settings', async () => {
            const qn = 16
            const stream = await biliRequest((api) => api.videoStream, {
                ...video1,
                qn,
            })
            stream.forEach((v) => {
                expect(v).to.have.property('data').to.have.property('quality').to.eq(qn)
            })
        }).timeout(15000)
        it('respects fnval settings', async () => {
            const fnval = 16 // m4s
            const stream = await biliRequest((api) => api.videoStream, {
                ...video1,
                fnval,
            })
            stream.forEach((v) => {
                expect(v).to.have.property('data').to.have.property('dash')
            })
        }).timeout(15000)
        it('respects mp4 settings', async () => {
            const stream = await biliRequest((api) => api.videoStream, {
                ...video1,
                type: 'mp4',
                platform: 'html5',
                high_quality: 1,
            })
            stream.forEach((v) => {
                expect(v).to.have.property('data').to.have.property('quality').to.eq(208)
            })
        }).timeout(15000)
        it('returns code -400 for invalid vid', async () => {
            const stream = await biliRequest((api) => api.videoStream, videoUndefined)
            stream.forEach((v) => {
                expect(v).to.have.property('code').to.eq(-400)
            })
        })
    })

    describe('MemberInfo tests', () => {
        it('works with aid and bvid', async () => {
            const info = await biliRequest((api) => api.memberInfo, member1)
            expect(info).to.have.property('data').to.have.property('name').to.eq(member1.uname)
        })
        it('returns code -400 for invalid mid', async () => {
            const info = await biliRequest((api) => api.memberInfo, memberUndefined)
            expect(info).to.have.property('code').to.eq(-400)
        })
    })

    describe('Danmaku tests', () => {
        it('works', async () => {
            const d = await biliRequest((api) => api.videoDanmakuRaw, { oid: video1.cid })
        })
    })

    describe('Interaction tests', () => {
        it('can like videos', async () => {
            const like = await biliRequest(({ like }) => like, video1)
            expect(like).to.have.property('code').to.be.an('number').to.be.gte(0)
        })
        it('can coin videos', async () => {
            const coin = await biliRequest(({ coin }) => coin, video1)
            expect(coin).to.have.property('code').to.be.an('number').to.be.gte(0)
        })
        it('can triple combo', async () => {
            const triple = await biliRequest(({ triple }) => triple, video1)
            expect(triple).to.have.property('code').to.be.an('number').to.be.gte(0)
        })
    })
})
