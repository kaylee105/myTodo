import Vue from 'vue'
import Vuex from 'vuex'
import myTodo from './modules/myTodo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        myTodo
    }
})
