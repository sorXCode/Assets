import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import BootstrapVue from "bootstrap-vue";
import * as VeeValidate from "vee-validate";
import Router from "vue-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: "/create",
            name: 'create',
            component: () =>
                import ("./components/Create.vue")
        },
        {
            path: "/edit/:id",
            name: 'edit',
            component: () =>
                import ("./components/Edit.vue")
        },
        {
            path: "/index",
            name: 'index',
            component: () =>
                import ("./components/Index.vue")
        }
    ]
})

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
}).$mount('#app')