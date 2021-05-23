/*
import { uuid } from 'vue-uuid';
*/
export function getDeviceId(){
      if(localStorage.getItem('my-todo-deviceId')){
            return localStorage.getItem('my-todo-deviceId')
      }else{
            /*
            api의 user_id가 int형이라서 아래 못씀
            */
           // const uidArr = uuid.v4().split("-")
           // const uidTransStr = uidArr[0].substring(0,6)

            const uidTransStr = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000;
            localStorage.setItem("my-todo-deviceId", uidTransStr)
            return uidTransStr;
      }

}