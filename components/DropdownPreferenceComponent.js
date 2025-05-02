export default {
    props: ['label'],
    template:
            `
        <div class="title-dropdown-container">
            <label for="1"> 
                {{ label }}  </label>
            <select name="" class="dropdown-selector" id="1">
                <option value="0" class="select">Välj...</option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>

            </select>
        </div>

    <div>
            <div class="selected-options">
            <label for="remove-button">selected option</label>
                <input class="remove-button"  type="image" src="assets/close.svg" alt="remove">
            </div>
        </div>

        `
}