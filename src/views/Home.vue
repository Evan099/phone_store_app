<template>
    <div>

      <van-tabs v-model="active" @click="findByCategoryType">
        <van-tab v-for="item in categories" :title=item.name :name=item.type></van-tab>
      </van-tabs>



      <van-card
        v-for="item in phones"

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
          <van-button size="mini" @click="buyBtnFn(item)">购买</van-button>
        </template>
      </van-card>




      <van-sku
        ref="getSku"
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"

        @buy-clicked="onBuyClicked()"

      />



    </div>
</template>

<script>
  import {index,findByCategoryType,findSpecsByPhoneId} from "../api/index"
    export default {
      name: "Home",
      data() {
        return {
          active: 0,
          categories:[],
          phones:[],
          show:false,


          sku: {},
          goods: {},


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
            this.phones = rs.data
          }else{
            alert(1)
          }
        },
        async buyBtnFn(item){//外面未选中时点击购买

          const phoneId = item.id
          const rs = await findSpecsByPhoneId({phoneId})

          if(rs.code === 0){
            this.show = true;

            this.sku = rs.data.sku
            this.goods = rs.data.goods

          }else{
            alert(1)
          }


        },
        onBuyClicked(){//选中规格是点击购买
          const getSku = this.$refs.getSku.getSkuData()
          const specsId = getSku.selectedSkuComb.s1//id值
          const selectedNum = getSku.selectedNum//购买数量

          this.$router.push({path:'/AddressList',query:{specsId:specsId, quantity:selectedNum}})

        }
      },
      mounted() {
          this.allPhoneList()
      }
    }
</script>

<style scoped>

</style>
