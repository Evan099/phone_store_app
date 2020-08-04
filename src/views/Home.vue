<template>
    <div>

        <van-tabs v-model="active" @click="findByCategoryType">
          <van-tab v-for="item in categories" :title=item.name :name=item.type></van-tab>
        </van-tabs>



      <van-card
        v-for="item in phones"
        num="1"
        :price=item.price
        :desc=item.desc
        :title=item.title
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        centered = true

      >
        <template #tags>
          <van-tag plain type="danger"  v-for="itemTag in item.tag">{{itemTag.name}}</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">购买</van-button>
        </template>
      </van-card>



    </div>
</template>

<script>
  import {index,findByCategoryType} from "../api/index"
    export default {
      name: "Home",
      data() {
        return {
          active: 0,
          categories:[],
          phones:[]
        };
      },
      methods:{
        async allPhoneList(){//查询全部手机
          const rs = await index({})
          if(rs.code === 0){
            this.categories = rs.data.categories
            this.phones = rs.data.phones
          }else{
            alert(1)
          }
        },
        async findByCategoryType(name){//根据类型查询全部手机
          this.active = name
          const categoryType = name
          const rs = await findByCategoryType({categoryType})
          if(rs.code === 0){
            this.categories = rs.data
          }else{
            alert(1)
          }
        }
      },
      mounted() {
          this.allPhoneList()
      }
    }
</script>

<style scoped>

</style>
