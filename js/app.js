import balanced from "./components/balanced.js";
import spending from "./components/spending.js";

export default{

  components:{balanced,spending},

  template:`
  <div class="">
    <balanced></balanced>
    <spending/>
  </div>
  `,

    data() {
        return {
          message: 'Hello Vue!'
        }
      },
      
}
