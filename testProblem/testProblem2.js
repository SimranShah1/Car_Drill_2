let inventory = require("../inventory")
const lastCar = require("../problem/problem2");

const result = lastCar(inventory, inventory.length -1+1);
console.log(result);
console.log("last car is a " + result.car_year + " "+result.car_make +" "+ result.car_model)