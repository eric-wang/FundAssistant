<template>
  <div>
      <mt-cell v-for="item in fundList" :title="item.name" label="描述信息" is-link></mt-cell>
  </div>
</template>

<script>
import util from "../util";

export default {
  name: 'hello',
  data () {
    return {
      searchText: '002321',
      fundList: [],
      pageNum: 0,
      loading: false
    }
  },

  methods: {
    //http://vip.stock.finance.sina.com.cn/fund_center/api/jsonp.php/callback/NetValueReturn_Service.NetValueReturnOpen?page=1&num=40&sort=one_year&asc=0&ccode=&type2=0&type3=&%5Bobject%20HTMLDivElement%5D=3ipce
    getFunds: function (pageNum) {
      this.loading = true;
      util.jsonp({
        url: 'http://vip.stock.finance.sina.com.cn/fund_center/api/jsonp.php/callback/NetValueReturn_Service.NetValueReturnOpen',
        jsonp: 'callback',
        scriptCharset: 'gb2312'
      }, {
        page: this.pageNum+1,
        num: 10,
        sort: 'one_year',
        asc: 0,
        type2: 0
      }, (data) => {
        console.log(data);
        this.fundList.push.apply(this.fundList, data.data);
//        this.fundList = data.data;
        this.pageNum += 1;
        this.loading = false;
      }, (error) => {
        console.error(error);
        this.loading = false;
      })
    },

    handleClick: function() {
      util.getStock('001387', function (data) {
        alert(data);
        console.log(data);
      },function (error) {
        console.log(error);
      })
    }
  },

  mounted() {
    console.log("hello.vue mount ok.");
    this.getFunds();
  }

}
</script>
