import DropdownPreferenceComponent from './components/DropdownPreferenceComponent.js'
import WhiteBlockComponent from './components/WhiteBlockComponent.js'
import PreferenceComponent from './components/PreferenceComponent.js'
import SearchPreferenceComponent from './components/SearchPreferenceComponent.js'

const app = {
      data() {
            return {
                  mealTypeOptions: ['Frukost', 'Lunch', 'Middag', 'Efterrätt']
            }
      }
}

const vueApp = Vue.createApp(app)

vueApp.component('white-block-component', WhiteBlockComponent)
vueApp.component('preference-component', PreferenceComponent)
vueApp.component('dropdown-preference-component', DropdownPreferenceComponent)
vueApp.component('search-preference-component', SearchPreferenceComponent)

vueApp.mount('#app')