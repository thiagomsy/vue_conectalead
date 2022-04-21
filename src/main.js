import Vue from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

Vue.use(FloatingVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
