<template>
    <div>
      specsId:{{specsId}}

      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />

    </div>
</template>
<script>
  import {addressList} from "../api/index"
    export default {
      name: "AddressList",
      data(){
          return{
            specsId:"",

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
        }
      },
      mounted() {
        this.specsId= this.$route.query.specsId
        this.getAddressList()
      }
    }
</script>

<style scoped>

</style>
