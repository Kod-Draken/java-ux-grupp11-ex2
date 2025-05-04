export default {
    data() {
        return {

            price: 0,
            maxPrice: 3000,

        }
    },
    props: ['label'],
    computed: {
        sliderStyle() {
            const percentage = (this.price / this.maxPrice) * 100;
            return {
                background: `linear-gradient(to right, #112643 ${percentage}%, #F2F2F2 ${percentage}%)`
            };
        }
    },
    template:
        `
            <div class="range-input-container">

                <div class="price-info">
                    <label for="range-slider"> {{ label }} </label>
                    <p>{{price}}</p>
                </div>

                <input v-model="price" type="range" id="range-slider" min="0" max="3000" :style="sliderStyle">

            </div>
        `
}