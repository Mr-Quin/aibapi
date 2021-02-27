import protobuf from 'protobufjs'
import { bilibili } from './dm'

export const decode = async (buffer: any) => {
    const root = await protobuf.load('./src/protobuf/dm.proto')
    const danmu = root.lookupType('bilibili.community.service.dm.v1.DanmakuElem')
    const binary = Buffer.from(buffer, 'utf8')
    const b = new protobuf.BufferReader(binary)

    const err = danmu.verify(b)
    if (err) {
        console.log(err)
        throw err
    }
    console.log(b, binary)
    const m = bilibili.community.service.dm.v1.DmSegMobileReply.verify(b)
    console.log(m)
    const m2 = bilibili.community.service.dm.v1.DmSegMobileReply.decodeDelimited(b)
    console.log(m2)
    // console.log('DanmakuElem', m2)
    // const message = danmu.decode(b)
    // console.log(message)
    // return danmu.toObject(message)
    return 0
}
