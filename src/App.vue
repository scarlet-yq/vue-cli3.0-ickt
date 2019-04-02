<template>
  <div id="app">
    <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
    />
    <van-button type="info" @click="showDialog">信息按钮</van-button>
    <router-link to="/home">home</router-link>
    <router-link to="/mall">mall</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
    <ul>
      <li>的得会的的东二环</li>
      <li>哈哈哈西丝戏的等级诶对吧</li>
      <li>的还得的对待和</li>
      <li>的我都问的巨额接爹</li>
    </ul>
    <van-loading type="spinner" color="#888" />
    <h3>的回味的胡好味道好对</h3>
    <span>得好的多喝</span>
    <p>文be内容文本内容</p>

    <div class="box"></div>
    <div class="wrap"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
      return {
          value: ''
      }
  },
  created() {

  },
  mounted() {

  },
  methods: {
      showDialog() {
          this.$toast.success('提示文案');
      }
  }
}
</script>

<style lang="less">
  .box {
    width: 200px;
    height: 200px;
    background-color: pink;
  }
  .wrap {
    width: 100px;
    height: 100px;
    border: 3px solid #777;
  }
</style>
