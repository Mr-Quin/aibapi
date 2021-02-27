import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { biliRequest, isSignedIn, biliConfig } from '../../src'
import { config as env } from 'dotenv-flow'
import getUrl from '../../src/client/getUrl'
import { decode } from '../../src/protobuf/parser'

chai.use(chaiAsPromised)
const { expect } = chai

const member = {
    mid: 79, //saber酱
}
const memberWithFewerSubmissions = {
    mid: 21038961, //MrBull0213
}
const videoBvid = {
    vid: 'BV1ax411c71N', // 放学后的Pleiades 四夜全【TD】
}
const videoAid = {
    vid: 2233, //[初音ミクと 巡音ルカと メグポイド] 千年の雪
}
const video4K = {
    vid: 'BV1GX4y157vZ',
}
const videoInvalid = {
    vid: 0,
}
const memberInvalid = {
    mid: 0,
}

env()
const { SESSDATA, bili_jct } = process.env

// sign in
biliConfig({ SESSDATA: SESSDATA, bili_jct: bili_jct })

describe('Basic tests', () => {
    // requires auth, don't put credentials into code
    it('can sign in', async () => {
        const info = await biliRequest((api) => api.myInfo)
        expect(isSignedIn()).to.equal(true)
        expect(info).to.have.property('code').to.equal(0)
    })
    it('can access membership api', async () => {
        const [memberInfo, uname] = await biliRequest((api) => [api.memberInfo, api.uname], member)
        expect(memberInfo).to.be.an('object').to.have.property('code').to.equal(0)
        expect(uname).to.be.an('string').to.equal('saber酱')
    })
    it('can access video api', async () => {
        const [videoInfo, videoTitle] = await biliRequest(
            (api) => [api.videoInfo, api.videoTitle],
            videoBvid
        )
        expect(videoInfo).to.be.an('object').to.have.property('code').to.equal(0)
        expect(videoTitle).to.be.an('string').to.equal('放学后的Pleiades 四夜全【TD】')
    })
    it('can chain api', async () => {
        const videoStream = await biliRequest(({ videoStream }) => videoStream, video4K)
        expect(videoStream).to.be.an('array')
        videoStream.forEach((e) => {
            expect(e).to.have.property('code').to.equal(0)
        })
    }).timeout(15000)
})

describe('Unit tests', () => {
    it('gets following', async () => {
        const memberFollowing = await biliRequest((api) => api.memberFollowing, { vmid: 2571249 })
        expect(memberFollowing.data?.list).to.be.an('array')
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

describe('Interaction tests', () => {
    it('can like videos', async () => {
        const like = await biliRequest(({ like }) => like, videoBvid)
        expect(like).to.have.property('code').to.be.an('number')
    })
    it('can coin videos', async () => {
        const coin = await biliRequest(({ coin }) => coin, videoBvid)
        expect(coin).to.have.property('code').to.be.an('number')
    })
    it('can triple combo', async () => {
        const triple = await biliRequest(({ triple }) => triple, videoBvid)
        expect(triple).to.have.property('code').to.be.an('number')
    })
})

describe('Error tests', () => {
    it('rejects missing parameters', async () => {
        // const a = await biliRequest(({ videoInfo }) => videoInfo)
        await expect(biliRequest(({ videoInfo }) => videoInfo)).to.eventually.be.rejectedWith(
            'Missing parameters. Expected aid,bvid, got {}'
        )
    })
    it('rejects anything other than 200 response code', async () => {
        await expect(
            getUrl('http://api.bilibili.com/x/web-interface/view/v')()
        ).to.eventually.be.rejectedWith('Response code 404 (Not Found)')
    })
    it('rejects undefined api', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await expect(biliRequest((api) => api.non)).to.eventually.be.rejectedWith(
            'Invalid api, api is undefined'
        )
    })
})
