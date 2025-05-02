export default {
      props: ['label'],
      // Lets add a prop for input-type
      // eg select, search, etc. that way we can make it display components modular
      template:
          `
          <input type="search" class="small-searchfield" placeholder="Sök...">
  
          `
  }