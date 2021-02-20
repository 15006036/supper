import axios from "axios";
export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2.1拦截网络请求
  instance.interceptors.request.use(config => {
    return config
  },error => {})
  // 2.2拦截相应
  instance.interceptors.response.use(res => {
    return res.data
  },error => {})
  // 发送请求
  return instance(config)
}
