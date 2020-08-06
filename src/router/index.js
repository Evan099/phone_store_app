import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../views/Home'
import AddressList from '../views/AddressList'
import InsertAddress from '../views/InsertAddress'
import UpdateAddress from '../views/UpdateAddress'
import OrderDetail from '../views/OrderDetail'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AddressList',
      name: 'AddressList',
      component: AddressList
    },
    {
      path: '/InsertAddress',
      name: 'InsertAddress',
      component: InsertAddress
    },
    {
      path: '/UpdateAddress',
      name: 'UpdateAddress',
      component: UpdateAddress
    },
    {
      path: '/OrderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
  ]
})
