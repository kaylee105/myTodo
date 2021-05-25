import store from '@/store'
import { axiosDefault } from '@/store/api/BaseAxios'

export function beforeEnterRoute(req, res, next){
    try {
      if(localStorage.getItem('my-todo-deviceId')){
            store.dispatch('setDeviceId',localStorage.getItem('my-todo-deviceId'))
      }else{
            axiosDefault().post(`/api/v1/user`).then(data => {
                  const uidTransStr = data.data.user_id
                  store.dispatch('setDeviceId',uidTransStr)
                  localStorage.setItem("my-todo-deviceId", uidTransStr)
            })
      }
      store.dispatch('getAllWriteList')
    } catch(e) {
        console.log(e.message)
    } finally {
        next()
    }
}