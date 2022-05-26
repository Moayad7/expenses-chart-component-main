export default{
    template:`
        <li 
        v-for="value in values"
        :key="values.id"
        class="text-center d-inline row mx-1 chart "
        :class="[
            {active: value.isActive},
            {chart1: value.amount==17.45},
            {chart2: value.amount==34.91},
            {chart3: value.amount==52.36},
            {chart4: value.amount==31.07},
            {chart5: value.amount==23.39},
            {chart6: value.amount==43.28},
            {chart7: value.amount==25.48},

        ]"
        :data= "value.amount":
        >
        {{ value.day }}
        </li>
    `,

    props:{
        data:Object
    },

    data(){
      return{
        values:[
          {
            "day": "mon",
            "amount": 17.45,
            "id":1,
            "isActive":false
          },
          {
            "day": "tue",
            "amount": 34.91,
            "id":2,
            "isActive":false
          },
          {
            "day": "wed",
            "amount": 52.36,
            "id":3,
            "isActive":true
            
          },
          {
            "day": "thu",
            "amount": 31.07,
            "id":4,
            "isActive":false
          },
          {
            "day": "fri",
            "amount": 23.39,
            "id":5,
            "isActive":false
          },
          {
            "day": "sat",
            "amount": 43.28,
            "id":6,
            "isActive":false
          },
          {
            "day": "sun",
            "amount": 25.48,
            "id":7,
            "isActive":false
          }
        ]
      }
    },

 

    // computed:{
    //     filteredValue(){
    //         for (var i=0; i<7; i++){
    //             if(this.values.id = this.d.getday()){
    //                 return this.values;
    //             }
    
    //             return this.values.filter(a => a.isActive = true);
    //         }
    //     }
    // }
}