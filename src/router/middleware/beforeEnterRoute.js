import store from '@/store'
import { getDeviceId } from '@/plugins/GetDeviceId'

export function beforeEnterRoute(req, res, next){
    try {
      store.dispatch('setDeviceId',getDeviceId())
      store.dispatch('getAllWriteList')
    } catch(e) {
        console.log(e.message)
    } finally {
        next()
    }
}