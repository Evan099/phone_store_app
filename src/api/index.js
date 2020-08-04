/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

const basicUrl = '/api'
// const basicUrl = 'http://127.0.0.1:8081'  //网关状态时请求无需跨域时


export const index = ({}) => ajax(basicUrl + '/phone/index', {})

export const findByCategoryType = ({categoryType}) => ajax(basicUrl + '/phone/findByCategoryType', {categoryType})
