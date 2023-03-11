/* Using the data from exercise 4. How would you represent it if the data was needed to be accessed easily by color? And how if it was needed to be accessed by size? */
let {Car} = require('./js-challenge5')
var fs = require('fs');
class CarManager {
    array = []
    /* getItemsByKey returns an array, key parameter is the category your cars are sorted by, can be a color as 'red', or a size as 'medium' */
    getItemsByKey(key) {
        try {
            let array = this.array;
            let cars = array.filter(data => data[key])
            console.log('items by property:', ...cars);
            return cars;
        } catch (error) {
            console.log('An error ocurred: ', error);
        }
}
/* addNewCategoryList creates a new category inside array, based on specific key. name parameter is the category you want your items to be separated and sorted by. Can be a new color, a new size. */
    addNewCategoryList(name) {
    try {
        let array = this.array;
        let newObject = {[name]:[]}
        let num = Number(array.length)
        array[num] = newObject;
        console.log(array);
        return array;
    } catch (error) {
        console.log('An error ocurred: ', error);
    }
}
/* addCarByKey adds a car to a specific category by car key such as color or size */
addCarByKey(car, key) {
try {
    let array = this.array;
    let carKey = car[key];
    let index = array.findIndex(data => data[carKey]);
    array[index][carKey].push(car);
    return array;
} catch (error) {
    console.log(`The key ${carKey} does not exist on list you can create it by using addNewCategoryList function`, error);
}
}

}
//Test
let manejador = new CarManager()
// Create Car class instances
let largeBlue = new Car('large', 'blue')
let smallRed = new Car('small', 'red')
let largeBlue2 = new Car('large', 'blue')
let largeRed = new Car('large', 'red')
let mediumBlue = new Car('medium', 'blue')
let smallRed2 = new Car('small', 'red')
let largeBlue3 = new Car('large', 'blue')
let mediumRed = new Car('medium', 'red')

//test color caregory
// manejador.addNewCategoryList('red')
// manejador.addNewCategoryList('blue')
// manejador.addCarByKey(largeBlue,'color')
// manejador.addCarByKey(smallRed,'color')
// manejador.addCarByKey(largeBlue2,'color')
// manejador.addCarByKey(largeRed,'color')
// manejador.addCarByKey(mediumBlue,'color')
// manejador.addCarByKey(smallRed2,'color')
// manejador.addCarByKey(largeBlue3,'color')
// manejador.addCarByKey(mediumRed,'color')
// manejador.getItemsByKey('red')

//test size caregory
// manejador.addNewCategoryList('small')
// manejador.addNewCategoryList('medium')
// manejador.addNewCategoryList('large')
// manejador.addCarByKey(largeBlue,'size')
// manejador.addCarByKey(smallRed,'size')
// manejador.addCarByKey(largeBlue2,'size')
// manejador.addCarByKey(largeRed,'size')
// manejador.addCarByKey(mediumBlue,'size')
// manejador.addCarByKey(smallRed2,'size')
// manejador.addCarByKey(largeBlue3,'size')
// manejador.addCarByKey(mediumRed,'size')
// manejador.getItemsByKey('small')

console.log('log:', ...manejador.array);

/* To show how data is represented i decided to write inside a json and save the car array */
fs.writeFileSync('./cars.json', JSON.stringify(manejador.array, null, 2));
console.log(JSON.parse(fs.readFileSync('./cars.json', 'utf8')));