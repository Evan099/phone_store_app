/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

const basicUrl = '/api'
// const basicUrl = 'http://127.0.0.1:8081'  //网关状态时请求无需跨域时

//查询全部类型，全部手机
export const index = ({}) => ajax(basicUrl + '/phone/index', {})

//根据ID查询手机类型
export const findByCategoryType = ({categoryType}) => ajax(basicUrl + '/phone/findByCategoryType', {categoryType})

// 查询手机规格
export const findSpecsByPhoneId = ({phoneId}) => ajax(basicUrl + '/phone/findSpecsByPhoneId', {phoneId})

//查询所有地址
export const addressList = ({}) => ajax(basicUrl + '/address/list', {})

//增加一个地址
export const insertOneAddress = ({name,tel,province,city,county,areaCode,addressDetail,isDefault}) => ajax(basicUrl + '/address/create', {name,tel,province,city,county,areaCode,addressDetail,isDefault},"POST")

//修改一个地址
export const updateOneAddress = ({id,name,tel,province,city,county,areaCode,addressDetail,isDefault}) => ajax(basicUrl + '/address/create', {id,name,tel,province,city,county,areaCode,addressDetail,isDefault},"POST")

//提交订单
export const creatOrder = ({name,tel,address,specsId,quantity}) => ajax(basicUrl + '/order/create', {name,tel,address,specsId,quantity},'POST')

//查询订单详情
export const serchOrderDetail = ({orderId}) => ajax(basicUrl + '/order/detail', {orderId})

//订单支付
export const pay = ({orderId}) => ajax(basicUrl + '/order/pay', {orderId},'PUT')
