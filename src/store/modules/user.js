import { getUserList, addInfo } from '@/api/api'

const user = {
  state: {
   userData:{},
   addinfo:"",
  },

  mutations: {
    SET_USER: (state, userData) => {
      state.userData=userData
    },
    ADD_INFO:(state,info)=>{
      state.addinfo=info
    },
  },

  actions: {
    // 获取用户信息
    GetuserList({ commit },data) {
        getUserList(data).then(res=>{
        const userdata = res.result
        commit('SET_USER', userdata)
        })    
    },
    Adduser({commit},data){
        addInfo(data).then(res=>{
          if(res.success==true) {
            commit('ADD_INFO','添加成功！')
          }else{
            commit('ADD_INFO',res.meta.msg)
          }
          
        })
    }
  }
}

export default user