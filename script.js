import DropdownPreferenceComponent from './components/DropdownPreferenceComponent.js'
import WhiteBlockComponent from './components/WhiteBlockComponent.js'
import PreferenceComponent from './components/PreferenceComponent.js'
import SearchPreferenceComponent from './components/SearchPreferenceComponent.js'
import SliderComponent from './components/SliderComponent.js'
import SearchResultComponent from './components/SearchResultComponent.js'

const app = {
      data() {
            return {
                  hideRecipes: true,


                  mealTypeOptions: ['Frukost', 'Lunch', 'Middag', 'Efterrätt'],
                  mealThemes: ['Grekisk', 'Indisk', 'Medelhavet', 'Husmanskost'],
                  allergies: ['Nötter', 'Bildäck', 'Laktos', 'Gluten'],
                  diets: ['Vegerarisk', 'Vegan', 'Plastdiet'],
            }
      },
      methods: {
            toggleShowRecipes() {
                  this.hideRecipes = false;
            }
      }
}

const vueApp = Vue.createApp(app)

vueApp.component('white-block-component', WhiteBlockComponent)
vueApp.component('preference-component', PreferenceComponent)
vueApp.component('dropdown-preference-component', DropdownPreferenceComponent)
vueApp.component('search-preference-component', SearchPreferenceComponent)
vueApp.component('slider-component', SliderComponent)
vueApp.component('search-result-component', SearchResultComponent)

vueApp.mount('#app')