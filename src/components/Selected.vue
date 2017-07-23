<template>
  <div class="hello">
    <mt-cell :title="item.name" :label="item.time" is-link @click.native="getDetail('001256')">
      <div>
        <span style="color:#F00">单位净值: {{item.current}}</span>
        <span style="color:#F00">新浪估值: {{item.sinaEstimate}}</span>
        <br/>
        <span style="color:#F00">当前净值: {{item.current}}</span>
        <span style="color:#F00">当前估值: {{item.sinaEstimate}}</span>

      </div>
    </mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>

    <mt-button @click.native="handleClick">Selected.vue Button</mt-button>
  </div>
</template>

<script>
  import util from "../util";
export default {
  name: 'selected',
  data () {
    return {
      msg: '我的关注',
      // 泓德优选成长混合,15:04:00,1.0484,1.0470,1.1470,0.0286,0.1337,2017-07-21
      selectedList: ['001256', '096001', '161723','160517','001878','210004','000408','163208','162411'],
      item: {
        name:"泓德优选成长混合",
        time: "2017-07-21 15:04:00",
        current: 1.0470,
        sinaEstimate: 1.0484
      }
    }
  },

  methods: {
    handleClick: function() {
      util.getStock('001256', function (data) {
        //alert(data);
        console.log(data);
      },function (error) {
        console.log(error);
      })
    },
    getDetail: function (code) {
      console.log('get detail for code: '+code);
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
