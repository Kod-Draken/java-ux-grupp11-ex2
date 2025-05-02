export default {
    props: ['label'],
    // Lets add a prop for input-type
    // eg select, search, etc. that way we can make it display components modular
    template:
        `
        <select name="" class="dropdown-selector" id="1">
            <option value="0" class="select">Välj...</option>
            <option value="1">option 1</option>
            <option value="2">option 2</option>
            <option value="3">option 3</option>
        </select>

        `
}