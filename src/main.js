import Vue from 'vue'
import App from './App.vue'
import Icon from './components/Icon'
import buttonGroup from './components/ButtonGroup'

Vue.config.productionTip = false
Vue.component("Icon",Icon)
Vue.component("buttonGroup",buttonGroup)
new Vue({
  render: h => h(App),
}).$mount('#app')
