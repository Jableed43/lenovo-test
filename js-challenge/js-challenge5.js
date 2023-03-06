/* If you had to represent, using JS data types, this list:
 Large blue car - Small Red car - Large Blue car - Large Red car – Medium Blue car – Small Red car – Large Blue car – Medium Red car . How would you do it? */

let {randomId} = require('./utils')

 // Create a Car class
class Car {
    size;
    color;
    id = randomId(5)

    constructor(size, color){
        this.size = size;
        this.color = color;
    }
}


// Create Car class instances

let largeBlue = new Car('large', 'blue')
let smallRed = new Car('small', 'red')
let largeBlue2 = new Car('large', 'blue')
let largeRed = new Car('large', 'red')
let mediumBlue = new Car('medium', 'blue')
let smallRed2 = new Car('small', 'red')
let largeBlue3 = new Car('large', 'blue')
let mediumRed = new Car('medium', 'red')

// Create car list and fill it with Car objects

const carArray = [largeBlue, smallRed, largeBlue2, largeRed, mediumBlue, smallRed2, largeBlue3, mediumRed]

console.log(carArray);

module.exports = {Car, carArray}
