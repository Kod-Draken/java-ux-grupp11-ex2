export default {
    props: ['options'],
    methods: {
        onSelect(event) {
            this.$emit('select', event.target.value);
        }
    },
    template:
        `
        <select name="" class="dropdown-selector" id="">
            <option disabled selected>Välj...</option>
            <option v-for="opt in options"> {{ opt }} </option>
            
        </select>

        `
}