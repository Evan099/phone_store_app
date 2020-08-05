<template>
    <div>
      ownAddress:{{ownAddress}}
      new:{{this.ownAddress.addressDetail}}
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result

        :address-info = ownAddress

        @save="onSave"
        @delete="onDelete"
      />
    </div>
</template>

<script>
  import {areaList} from '../assets/js/areaList'
    export default {
        name: "UpdateAddress",
        data(){
          return{
            areaList:areaList,
            ownAddress:{}
          }
        },
      mounted() {
        this.ownAddress = this.$route.query.ownAddress
        const proAddress = this.ownAddress.province+this.ownAddress.city+this.ownAddress.county
        const addressDetail =this.$route.query.ownAddress.address.replace(proAddress)
        this.ownAddress.addressDetail = addressDetail
      }
    }
</script>

<style scoped>

</style>
