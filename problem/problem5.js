const inventory = require('../inventory');
const years = require('../problem/problem4');

function olderYears() {
 

    return inventory.filter((entry)=>{
        return entry.car_year < 2000
    })



}

module.exports = olderYears