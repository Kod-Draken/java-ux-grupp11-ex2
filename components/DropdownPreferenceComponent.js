export default {
    props: ['options'],
    emits: ['select'],
    methods: {
        onSelect(event) {
            this.$emit('select', event.target.value);
        }
    },
    template:
        `
        <select name="" class="dropdown-selector" @change="onSelect">
            <option disabled selected>Välj...</option>
            <option v-for="opt in options"> {{ opt }} </option>
            
        </select>

        `
}