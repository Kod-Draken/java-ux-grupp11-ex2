export default {
    props: ['label', 'data'],
    data() {
        return {
            selectedOptions: []
        }
    },
    methods: {
        handleSelect(value) {
            if (this.selectedOptions.includes(value)){
                return
            }
            this.selectedOptions.push(value)
        },
        removeOption(optionToRemove) {
            this.selectedOptions = this.selectedOptions.filter(opt => opt !== optionToRemove)
        }
    },
    template: `
            <div>
                <div class="title-dropdown-container">
                <label>{{ label }}</label>
                <slot :onSelect="handleSelect" :options="data"></slot>
                </div>

                <div class="selected-option-container">
                    <div class="selected-option" v-for="opt in selectedOptions" :key="opt">
                        <label>{{ opt }}</label>
                        <input @click="removeOption(opt)" class="remove-button" type="image" src="assets/close.svg" alt="remove">
                    </div>
                </div>
            </div>
        `
}