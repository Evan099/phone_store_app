<template>
    <div>
      orderId:{{orderId}}
      <van-cell-group>
        <van-cell
          icon="location-o"
          :title=orderInfo.buyerName
          :value=orderInfo.tel
          :label=orderInfo.address
        />
      </van-cell-group>

      <van-card
        :num=orderInfo.num
        :price=orderInfo.price
        :desc=orderInfo.specs
        :title=orderInfo.phoneName
        :thumb=orderInfo.icon
      />

      <van-cell-group>
        <van-cell title="配送方式" value="快递" />
        <van-cell title="商品金额" :value=orderInfo.amount />
        <van-cell title="运费" :value=orderInfo.freight />
      </van-cell-group>


      <van-submit-bar :price=orderInfo.amount*100 button-text="确认付款" @submit="pay" />

    </div>
</template>

<script>
  import {serchOrderDetail,pay} from "../api/index"
  import { Toast } from 'vant';
  export default {
    name: "OrderDetail",
    data(){
      return{
        orderId:{},

        orderInfo:{

        }

      }
    },
    methods:{
      async ininOrderDetail(){//查询订单
        const orderId = this.$route.query.orderId
        this.orderId = orderId

        const rs = await serchOrderDetail({orderId})

        if(rs.code === 0){
          this.orderInfo = rs.data

        }else{
          this.$notify({ type: 'danger', message: rs.msg});
        }

      },
      async pay(){//付款
        const orderId = this.orderId

        const rs = await pay({orderId})
        if(rs.code === 0){
          Toast.success('支付成功，请等待收货');
          // this.$notify({ type: 'danger', message: "支付成功，请等待收货"});
        }else{
          this.$notify({ type: 'danger', message: rs.msg});
        }

      }
    },
    mounted() {
      this.ininOrderDetail()
    }
  }
</script>

<style scoped>

</style>
