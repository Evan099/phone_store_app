<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      save-button-text="修改"
      :address-info = ownAddress

      @save="onUpdate"
      @delete="onDelete"
    />
  </div>
</template>

<script>
  import {areaList} from '../assets/js/areaList'
  import {updateOneAddress} from "../api";
  export default {
    name: "UpdateAddress",
    data(){
      return{
        areaList:areaList,
        ownAddress:{}
      }
    },
    methods:{
      initAddress(){// 获取query传参带过来的数据

        // 获取query传参带过来的数据
        const addressData = this.$route.query.ownAddress
        this.ownAddress = addressData

        // 获取带“区”和“县”的字符在哪个位置
        let index1 = addressData.address.indexOf("区")
        let index2 = addressData.address.indexOf("县")

        let aIndex = null

        if(index1 !== -1){
          aIndex = index1
        }else if(index2 !== -1){
          aIndex = index2
        }

        // 截取位置后面的字符
        const addressDetail = addressData.address.substring(aIndex+1,addressData.address.length)

        //将截取到的字符注入到地址详情里面
        this.ownAddress.addressDetail = addressDetail
      },
      async onUpdate(ownAddress){//修改

        let e = ownAddress
        console.log(e)

        const id = e.id;
        const name = e.name;
        const tel = e.tel;
        const province = e.province
        const city = e.city
        const county = e.county;
        const addressDetail = e.addressDetail;
        const areaCode = e.areaCode;
        const isDefault = e.isDefault;

        const rs = await updateOneAddress({id,name,tel,province,city,county,areaCode,addressDetail,isDefault})

        if(rs.code === 0){
          this.$notify({ type: 'success', message: '修改成功'});
        }else{
          this.$notify({ type: 'danger', message: rs.msg});
        }


      }
    },
    mounted() {
        this.initAddress()
    }
  }
</script>

<style scoped>

</style>
