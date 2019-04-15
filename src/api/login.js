import { axios } from '@/utils/request'
import api from './index'
/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */

export default api
export function login(parameter) {
  return axios({
    url: api.Login,
    method: 'post',
    data: parameter
  })
}
