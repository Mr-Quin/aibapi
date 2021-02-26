import biliStore from './store'
import { biliConfig, biliRequest } from './client'

const videoQualityDefinition = {
    6: 'MP4-240P',
    16: '360P',
    32: '480P', // max for guest
    64: '720P',
    74: '720P60', // need membership
    80: '1080P',
    112: '1080P+', // need membership
    116: '1080P60', // need membership
    120: '4K',
    208: 'MP4-unknown',
}
const isSignedIn = () => biliStore.getState().SESSDATA !== ''

export { isSignedIn, videoQualityDefinition }
export { biliRequest, biliConfig }
