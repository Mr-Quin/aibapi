import protobuf from 'protobufjs'
import { bilibili } from './dm'

export const decode = (buffer: Buffer) => {
    // const root = await protobuf.load('./src/protobuf/dm.proto')
    // const danmu = root.lookupType('bilibili.community.service.dm.v1.DanmakuElem')

    const err = bilibili.community.service.dm.v1.DmSegMobileReply.verify(buffer)
    if (err) {
        throw err
    }
    const decode = bilibili.community.service.dm.v1.DmSegMobileReply.decode(buffer)
    console.log(decode.elems[0])
    return decode
}
