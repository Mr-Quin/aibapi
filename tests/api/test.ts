import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { biliRequest, biliConfig } from '../../src'
import { isSignedIn } from '../../src/util'
import { config as env } from 'dotenv-flow'
import getUrl from '../../src/client/getUrl'

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

// sign in, pulls credential from env
env()
const { SESSDATA, bili_jct } = process.env
biliConfig({ SESSDATA: SESSDATA, bili_jct: bili_jct })

describe('Basic tests', () => {
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

describe('Error tests', () => {
    it('biliRequest rejects if missing parameters', async () => {
        await expect(biliRequest(({ videoInfo }) => videoInfo)).to.eventually.be.rejectedWith(
            'Missing parameters. Expected aid,bvid, got {}'
        )
    })
    it('rejects undefined api', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await expect(biliRequest((api) => api.non)).to.eventually.be.rejectedWith(
            'Invalid api "undefined"'
        )
    })
})
