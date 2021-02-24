import { expect } from 'chai'
import { biliLogin, biliRequest } from '../../src'
import { config } from 'dotenv-flow'

const member = {
    mid: 79,
}

const video = {
    vid: 'BV1ax411c71N',
}

const video2 = {
    vid: 'BV16x411T74V',
}

config()

const { SESSDATA, bili_jct } = process.env

biliLogin({ SESSDATA: SESSDATA, bili_jct: bili_jct }, { debug: true })

describe('Api tests', () => {
    it('check membership api', async () => {
        const result = await biliRequest((api) => api.memberName, member)
        expect(result).to.be.an('object').to.have.property('memberName').to.equal('saber酱')
    })
    it('check video api', async () => {
        const result = await biliRequest((api) => api.videoTitle, video)
        expect(result)
            .to.be.an('object')
            .to.have.property('videoTitle')
            .to.equal('放学后的Pleiades 四夜全【TD】')
    })
    it('like video', async () => {
        const result = await biliRequest((api) => api.like, video)
    })
})
