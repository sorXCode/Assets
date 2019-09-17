import Vue from 'vue';
import App from './App.vue';
import router from "./router"
import BootstrapVue from "bootstrap-vue";
import * as VeeValidate from "vee-validate";
import './plugins/axios';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);


Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')