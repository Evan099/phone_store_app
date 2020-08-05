<template>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result

        address-info = addressInfo

        @save="onSave"
        @delete="onDelete"
      />
    </div>
</template>

<script>
  import {areaList} from '../assets/js/areaList'
  import {insertOneAddress} from "../api/index"
    export default {
      name: "InsertAddress",
      data() {
        return {
          areaList:areaList,

        }
      },
      methods: {
       async onSave(addressInfo) {

          let e = addressInfo


          const name = e.name;
          const tel = e.tel;
          const province = e.province
          const city = e.city
          const county = e.county;
          const addressDetail = e.addressDetail;
          const areaCode = e.areaCode;
          const isDefault = e.isDefault;


          const rs = await insertOneAddress({name,tel,province,city,county,areaCode,addressDetail,isDefault})

           if(rs.code === 0){
             this.$notify({ type: 'success', message: rs.msg});
           }else{
             this.$notify({ type: 'danger', message: rs.msg});
           }




        },
        onDelete() {


        },

      },
    }
</script>

<style scoped>

</style>
