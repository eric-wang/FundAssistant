<template>
  <div id="app">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="market">
        <Market></Market>
      </mt-tab-container-item>
      <mt-tab-container-item id="choose">
        <Selected></Selected>
      </mt-tab-container-item>
      <mt-tab-container-item id="purchased">
        <Purchased></Purchased>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="market">
        <img slot="icon" src="./assets/logo.png">
        基金市场
      </mt-tab-item>
      <mt-tab-item id="choose">
        <img slot="icon" src="./assets/logo.png">
        我的关注
      </mt-tab-item>
      <mt-tab-item id="purchased">
        <img slot="icon" src="./assets/logo.png">
        我的基金
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Market from './components/Market'
import Selected from './components/Selected'
import Purchased from './components/Purchased'

export default {
  name: 'app',
  data () {
    return {
      selected: "choose"
    }
  },
  components: {
    Hello,
    Market,
    Selected,
    Purchased
  },
  methods: {
    handleClick: function() {
      this.$toast('Hello in App.vue!')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
