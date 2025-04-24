import DropdownPreferenceComponent from './components/DropdownPreferenceComponent.js'
import WhiteBlockComponent from './components/WhiteBlockComponent.js'

const app = {

}

const vueApp = Vue.createApp(app)

vueApp.component('white-block-component', WhiteBlockComponent)
vueApp.component('dropdown-preference-component', DropdownPreferenceComponent)

vueApp.mount('#app')