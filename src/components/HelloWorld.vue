<template>
  <div class="hello">
    66
    <van-button type="primary">主要按钮</van-button>

    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />

    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>

    <!-- 密码输入框 -->
    <van-password-input
      :value="value"
      info="密码为 6 位数字"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />


    <!-- 数字键盘 -->
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      show: false,
      value: '',
      showKeyboard: true,
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
  }
}
</script>

<style scoped>

</style>
