
export default {
    mounted() {
        console.log('Dropdown options:', this.options);
    },
    props: ['options'],
    methods: {
        onSelect(event) {
            this.$emit('select', event.target.value)
        },
    },
    template:
        `
        <select @change="onSelect" class="dropdown-selector">
            <option disabled selected>Välj...</option>
            
            <option v-for="item in options" :key="item" :value="item">
                {{ item }} 
            </option>
        </select>

        `
}