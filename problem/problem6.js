const inventory = require("../inventory");

function bmwAndAudi(inventory) {
   
    return inventory.filter((entry)=>{
    return entry.car_make == "Audi" || entry.car_make == "BMW"
})
 }


module.exports = bmwAndAudi ;