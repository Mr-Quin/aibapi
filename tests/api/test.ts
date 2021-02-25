import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { biliRequest, isSignedIn, biliConfig } from '../../src'
import { config as env } from 'dotenv-flow'

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
    vid: '1216974', // 【岚少实况】 水果探求者  【完结】【任性女神俏天使】
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
biliConfig({ SESSDATA: SESSDATA, bili_jct: bili_jct, debug: true })

describe('Basic tests', () => {
    it('can sign in', async () => {
        const result = await biliRequest((api) => api.myInfo)
        expect(isSignedIn()).to.equal(true)
        expect(result)
            .to.be.an('object')
            .to.have.property('myInfo')
            .to.have.property('code')
            .to.equal(0)
    })
    it('can access membership api', async () => {
        const { memberInfo, memberName } = await biliRequest(
            (api) => [api.memberInfo, api.memberName],
            member
        )
        expect(memberInfo).to.be.an('object').to.have.property('code').to.equal(0)
        expect(memberName).to.be.an('string').to.equal('saber酱')
    })
    it('can access video api', async () => {
        const { videoInfo, videoTitle } = await biliRequest(
            (api) => [api.videoInfo, api.videoTitle],
            videoBvid
        )
        expect(videoInfo).to.be.an('object').to.have.property('code').to.equal(0)
        expect(videoTitle).to.be.an('string').to.equal('放学后的Pleiades 四夜全【TD】')
    })
    it('can chain api', async () => {
        const { videoStream } = await biliRequest(({ videoStream }) => videoStream, videoAid)
        expect(videoStream).to.be.an('array')
        videoStream.forEach((e) => {
            expect(e).to.have.property('code').to.equal(0)
        })
    }).timeout(15000)
})

describe('All api test', () => {
    it('works', async () => {
        const all = await biliRequest((api) => Object.values(api), {
            ...videoInvalid,
            ...memberInvalid,
        })
        console.log(JSON.stringify(all))
    }).timeout(50000)
})

describe('Interaction tests', () => {
    it('can like videos', async () => {
        const { like } = await biliRequest(({ like }) => [like], videoBvid)
        expect(like).to.be.an('object').to.have.property('code').to.be.an('number')
    })
    it('can coin videos', async () => {
        const { coin } = await biliRequest(({ coin }) => [coin], { ...videoBvid })
        expect(coin).to.be.an('object').to.have.property('code').to.be.an('number')
    })
    it('can triple combo', async () => {
        const { triple } = await biliRequest(({ triple }) => [triple], { ...videoBvid })
        expect(triple).to.be.an('object').to.have.property('code').to.be.an('number')
    })
})

describe('Error tests', () => {
    it('rejects missing parameters', async () => {
        expect(biliRequest(({ videoInfo }) => videoInfo)).to.be.rejectedWith(Error)
    })
    it('rejects undefined api', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(biliRequest((api) => api.non)).to.be.rejectedWith(Error)
    })
})
