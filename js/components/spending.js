import item from "./item.js";

export default{

  components:{item},

    template:`
    <div class="spending p-4">
      <div>
        <h2 class="mb-5">Spending - Last 7 days</h2>

        <div class="list row">
          <ul class="align-items-end d-flex justify-content-around ">
            <item class="d-flex"></item>
          </ul>
        </div>

        <hr>
        <div class="total">
          <label for="">Total this month</label>
          <div class="d-flex justify-content-between">
            <h1>$478.33</h1>
            <div class="ratio-sec">
              <label class="ratio">+2.4%</label>
              <p for="">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,


}


