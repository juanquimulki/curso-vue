import Vue from 'vue'
import App from './App.vue'
import './mystyle.css'
import router from './router'

new Vue({
  router,
  el: '#app',
  render(createElement) { return createElement(App) }
});