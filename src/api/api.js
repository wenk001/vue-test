import { axios } from '@/utils/request'

function getAction(url,parameter) {
    return axios({
      url: url,
      method: 'get',
      params: parameter
    })
  }
  
  function postAction(url,parameter){
    return axios({
      url:url,
      method: 'post',
      data: parameter
    })
  }

  const addInfo = (params)=>postAction("/user/regist",params);

  const getUserList = (params)=>getAction("/user/list",params);

  export {getUserList, addInfo}