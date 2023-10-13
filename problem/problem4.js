function carYear(inventory) {
    return inventory.map((entry)=>{
     return entry.car_year;
    })
 }
 
 module.exports = carYear;