import { biliRequest, biliLogin } from './client'
import * as biliTypes from './types'
import biliStore from './store/store'

const isSignedIn = () => biliStore.getState().SESSDATA !== ''

export { biliTypes, biliRequest, biliLogin, isSignedIn }
