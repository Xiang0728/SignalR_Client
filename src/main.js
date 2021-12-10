import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueAxios from 'vue-axios'

import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

//import signalr from './utils/signalR'

import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)

//Vue.use(signalr)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");




