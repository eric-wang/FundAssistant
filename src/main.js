import Vue from 'vue';
import App from './App';

// Vue.config.productionTip = false

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

new Vue({
  el: '#app',
  template: '<App/>',
  render: h => h(App)
});
