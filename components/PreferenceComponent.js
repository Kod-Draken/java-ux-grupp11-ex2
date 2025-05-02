export default {
    props: ['label'],
    // Lets add a prop for input-type
    // eg select, search, etc. that way we can make it display components modular
    template:
            `
        <div class="title-dropdown-container">
            <label for="1"> 
                {{ label }}  </label>
            
            <slot></slot>               
                
        </div>

        <div>
            <div class="selected-options">
            <label for="remove-button">selected option</label>
                <input class="remove-button"  type="image" src="assets/close.svg" alt="remove">
            </div>
        </div>

        `
}