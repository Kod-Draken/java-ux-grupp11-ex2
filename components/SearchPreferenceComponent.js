export default {
    data() {
        return {
            keyword: "",
        }
    },
    methods: {
        addFilter() {
            this.$emit('keyword', this.keyword)
            this.keyword = "";
        }
    },
    props: ['label'],
    template:
        `
            <div class="small-searchfield">
                <img src="assets/sök.svg" alt="magnifying glass">
                <input type="search" placeholder="Sök..." @keyup.enter="addFilter" v-model="keyword">
            </div>
  
          `
}