export default {
    data() {
        return {
            isOpen: false,
            selected: null
        }
    },
    mounted() {
        console.log('Dropdown options:', this.options);
    },
    props: ['options'],
    methods: {
        onSelect(item) {
            this.selected = item;
            this.isOpen = false;
            this.$emit('select', item)
            alert(item)
        },
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        }
    },
    template:
        `
    <div class="dropdown">
        <div class="dropdown-toggle" @click="toggleDropdown">
            {{ 'Välj...' }}
         </div>
        <ul v-if="isOpen" class="dropdown-list">
            <li class="dropdown-item" v-for="item in options" :key="item" @click="onSelect(item)">
                {{ item }} 
            </li>
        </ul>
    </div>

        `
}