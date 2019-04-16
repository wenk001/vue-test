import { axios } from '@/utils/request'

function getAction(url) {
    return axios({
      url: url,
      method: 'get',
    })
  }

  const getUserList = ()=>getAction("/user/list");

  export {getUserList}