import Vue from 'vue'
import App from './App.vue'
import './assets/iconmoon/iconfont.css'
import Toast from './Toast/index.js'

Vue.use(Toast)

new Vue({
  el: '#app',
  render: h => h(App)
})
