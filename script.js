import CategoryComponent from './components/CategoryComponent.js'

const app = {

}

const vueApp = Vue.createApp(app)

vueApp.component('category-component', CategoryComponent)

vueApp.mount('#app')