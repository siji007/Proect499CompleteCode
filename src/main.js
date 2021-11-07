import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTailwind from 'vue-tailwind'
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueTailwind);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import "@/assets/styles/main.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import {routes} from './route'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.config.productionTip = false

const router = new VueRouter({
    routes,
    mode: 'history'
})
new Vue({
    render: h => h(App),
    router

}).$mount('#app')