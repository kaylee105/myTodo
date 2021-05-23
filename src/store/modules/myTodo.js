import { axiosDefault } from '@/store/api/BaseAxios'


const state = () => ({
    deviceId: 1111,
    writeList: [],
    sort: 'asc',
    isShowbeforeLoading: true,
})

//getters
const getters = {
    getDeviceId: state => {
        return state.deviceId
    },

    getWriteLists: state => {
        return state.writeList
    },

    totalListCount: state => {
        return state.writeList.length
    },

    countOfComplete: state => {
        return state.writeList.filter(item => item.state == 2).length
    },

    getSort: state => {
        return state.sort
    },

    getBeforeLoading: state => {
      return state.isShowbeforeLoading
    },

}

//actions
const actions = {
   setDeviceId({ commit }, devicePayload){
      commit('setDeviceId', devicePayload)
    },
    // [NOTE] 수행위치: route/beforeEnterRoute.js
    getAllWriteList({ commit, state }) {
        axiosDefault().get(`/api/v1/todos/${state.deviceId}`)
            .then(data => {
                commit('setWriteList', data.data)
                console.log(`GET 성공 /api/v1/todos/${state.deviceId}`, data.data)
        })
    },

    addList: async ({ commit, state }, itemPayload) => {
        //localstorage에 추가하기
        // [NOTE] API post
        // - 궁금한점1: state에 정렬 상태에 따라, push or shift 했었는
        // - 궁금한점1: 수정 있을때마다 데이터를 전체 받아와서 뿌려야 하는건지. (우선 이걸로)

        await axiosDefault().post(`/api/v1/todos/${state.deviceId}`, itemPayload)
            .then(data => {
                // [NOTE] post 응답 data는 성공 여부만 있음 - 그래서 get도 호출했음..ㅠ
                console.log(`post 성공 /api/v1/todos/${state.deviceId}`, data)
        })

        await axiosDefault().get(`/api/v1/todos/${state.deviceId}`)
            .then(data => {
                commit('setWriteList', data.data)
                console.log(`GET 성공 /api/v1/todos/${state.deviceId}`, data.data)
        })
    },

    updateList: ({ commit, state }, itemPayload) => {
        axiosDefault().patch(`/api/v1/todos/${itemPayload.item.id}`, { text: `${itemPayload.item.text}`, state : itemPayload.state })
            .then(data => {
                commit('updateState', itemPayload)
                console.log(`patch 성공 /api/v1/todos/${state.deviceId}`, data)
        })
    },

    removeList: ({ commit }, itemPayload) => {
        axiosDefault().delete(`/api/v1/todos/${itemPayload.id}`)
            .then(data => {
                commit('removeList', itemPayload.idx)
                console.log(`delete 성공 /api/v1/todos/${itemPayload.id}`, data)
        })
    },

    async removeAllList({ commit, state }) {
        for (const item of state.writeList) {
            await axiosDefault().delete(`/api/v1/todos/${item.id}`)
                .then(data => {
                    console.log(data)
                    console.log(`delete 성공 /api/v1/todos/${item.id}`, data)
            })
        }
        await commit('removeAllList', [])
    },

    updateSort: ({ commit, state }, _sort) => {
            console.log(state.writeList)
            //[D] id값으로 정렬 변경
            let _writeLists = [];
            if (_sort == 'asc') {
                  _writeLists = state.writeList.sort(function(a, b) {
                        return a.id-b.id
                  })
            }else{
                  _writeLists =  state.writeList.sort(function(a, b) {
                        return b.id-a.id
                  })
            }
            commit('updateSort', _sort)
            commit('setWriteList', _writeLists)
    },

    setBeforeLoading:({ commit}, isShowbeforeLoading) => {
      commit('setBeforeLoading', isShowbeforeLoading)
    },
}
//mutaions
const mutations = {
     setDeviceId(state,devicePayload) {
        state.deviceId = devicePayload
    },

    setWriteList(state, writeLists) {
        // [Note] api 데이터 state.writeList 저장
        state.writeList = writeLists
    },

    // [NOTE] 미사용 주석
    // addList: (state, itemPayload) => {
    //     state.writeList = itemPayload
    // },

    removeList(state, idxPayload) {
        state.writeList.splice(idxPayload, 1)
    },

    removeAllList(state, emptyPayload) {
        state.writeList = emptyPayload
    },

    // [NOTE] state 변경 추가
    updateState(state, itemPayload) {
        state.writeList[itemPayload.idx].state = itemPayload.state
    },

    updateSort(state, _sort) {
        state.sort = _sort
    },

    setBeforeLoading(state,isShowbeforeLoading) {
          state.isShowbeforeLoading = isShowbeforeLoading
    },
}


export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
}