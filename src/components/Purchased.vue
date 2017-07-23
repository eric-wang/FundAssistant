<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <mt-button @click.native="handleClick">Purchased.vue Button</mt-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我的基金'
    }
  },

  methods: {
    handleClick: function() {
      this.$toast('Hello from Hello.vue!')
    }
  },

  mounted() {
    console.log("Hello.vue mount ok.");
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
