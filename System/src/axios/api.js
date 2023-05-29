// 对请求接口进行封装

// 引入封装好的axios实例
import requests from './axios.js';

let login = (params = {}) => {
  return requests.post('/login', params)
}








export default {
  login
}
