export default {
    props: ['label','data'],
    data() {
        return {
            selectedOptions: []
        }
    },
    methods: {
        handleSelect(value) {
            this.selectedOptions.push(value)
        }
    },
    template:
            `
        <div class="title-dropdown-container">
            <label> 
                {{ label }}
            </label>
            
            <slot data='data'></slot>               
                
        </div>

        <div>
            <div class="selected-options" v-for="opt in selectedOptions">
                <label> {{ opt }} </label>
                <input class="remove-button"  type="image" src="assets/close.svg" alt="remove">
            </div>
        </div>

        `
}