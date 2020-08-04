/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'


const basicUrl = 'http://192.168.1.10:8080/'  //网关状态时请求无需跨域时

const url = "api"


export const getInfo = ({}) => ajax(basicUrl + url + '/0/comment/getIndustryList', {}, 'POST')
