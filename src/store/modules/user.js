import { getUserList } from '@/api/api'

const user = {
  state: {
   userData:[]
  },

  mutations: {
    SET_USER: (state, userData) => {
      state.userData=userData
    },
  },

  actions: {
    // 获取用户信息
    GetuserList({ commit }) {
        getUserList().then(res=>{
        const userdata = res.result.list
        commit('SET_USER', userdata)

        })
        
        
    },

  }
}

export default user