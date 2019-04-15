import { axios } from '@/utils/request'

function getAction(url,parameter) {
    return axios({
      url: url,
      method: 'get',
      params: parameter
    })
  }

  const queryUSELISTByUser = (params)=>getAction("/sys/permission/queryByUser",params);

  export {queryUSELISTByUser}