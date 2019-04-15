import Vue from 'vue'
import { login} from "@/api/login"
import { queryusrlistbyUser } from '@/api/api'

const user = {
  state: {
    token: '',
    username: '',
    name: '',
    gender: '',
    phone: '',
    farm: '',
    status: '',
    createTime: '',
    updateTime: '',
    userInfo: '',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME:(state,{ username, name, status })=>{
        state.username = username
        state.name = name
        state.status = status
    },
    SET_USER: (state, {gender, phone, farm, createTime, updateTime }) => {
      state.gender = gender
      state.phone = phone
      state.farm = farm
      state.createTime = createTime
      state.updateTime = updateTime
    },
    SET_INFO: (state, info) => {
        state.info = info
      },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          if(response.code =='200'){
            const result = response.result
            const userInfo = result.userInfo
            Vue.ls.set('ACCESS_TOKEN', result.token, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set('USER_NAME', userInfo.username, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set('USER_INFO', userInfo, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            commit('SET_INFO', userInfo)
            commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname})
            resolve()
          }else{
            reject(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetPermissionList({ commit }) {
      return new Promise((resolve, reject) => {
        let username = Vue.ls.get('USER_NAME');
        let params = {username:username};
        queryusrlistbyUser(params).then(response => {
          const userData = response.result;
          if (userData && userData.length > 0) {
            commit('SET_USER', userData)
          } else {
            reject('getPermissionList: permissions must be a non-null array !')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

  }
}

export default user