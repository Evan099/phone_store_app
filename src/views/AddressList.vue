<template>
    <div>
<!--      specsId:{{orderInfo.specsId}}-->
<!--      quantity:{{orderInfo.quantity}}-->
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="onBuy"
      />

    </div>
</template>
<script>
  import {addressList,creatOrder} from "../api/index"
    export default {
      name: "AddressList",
      data(){
          return{
            orderInfo:{
              specsId:"",
              quantity:"",
            },
            chosenAddressId: '1',
            list: [
              {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                isDefault: true,
              },
              {
                id: '2',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号',
              },
            ],
          }
      },
      methods:{
        async getAddressList(){//获取地址列表
          const rs = await addressList({})

          if(rs.code === 0){
            this.list = rs.data
          }else{
            alert(1)
          }

        },
        onAdd(){
          this.$router.push({path:'/InsertAddress'})
        },
        onEdit(item,index){
          this.$router.push({path:'/UpdateAddress',query:{ownAddress:item}})
        },
        async onBuy(item){//提交订单（选中即提交）

          const specsId = this.orderInfo.specsId
          const quantity = this.orderInfo.quantity
          const name = item.name
          const tel = item.tel
          const address = item.address

          const rs = await creatOrder({name,tel,address,specsId,quantity})
          if(rs.code === 0){
            this.$notify({ type: 'success', message: '下单成功' });

            const orderId = rs.data.orderId

            setTimeout(this.$router.push({path: '/OrderDetail', query: {orderId: orderId}}),1500)

          }else{
            this.$notify({ type: 'danger', message: rs.msg});
          }



        }
      },
      mounted() {
        this.orderInfo.specsId = this.$route.query.specsId
        this.orderInfo.quantity = this.$route.query.quantity
        this.getAddressList()
      }
    }
</script>

<style scoped>

</style>
