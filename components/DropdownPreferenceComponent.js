export default {
    props: ['label'],
    template:
        `
    <label> 
        {{ label }} 
        <select name="" id="">
            <option value="">options</option>
        </select>
    </label>
    <div class="selected">
        <div>selected options</div>
    </div>

    `
}