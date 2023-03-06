/* Using the data from exercise 4. How would you represent it if the data was needed to be accessed easily by color? And how if it was needed to be accessed by size? */

let {carArray} = require('./js-challenge5')

class CarManager {
    carList = []

    constructor(carList){
        this.carList = carList
    }

    addCarToList(car){
        this.carList.push(car)
        console.log(`Car was created and added to list`);
        return car;
    }

    getCarsByColor(color){
        let searchCar = this.carList.filter(car => car.color === color)
        console.log(`Car list: `, searchCar);
        return searchCar;
    }

    getCarsBySize(size){
        let searchCar = this.carList.filter(car => car.size === size)
        console.log(`Car list: `, searchCar);
        return searchCar;
    }

}

//Test

// Use required data from carArray and insert into CarManager
let newCarManager = new CarManager(carArray)

//Access by color
newCarManager.getCarsByColor('red')
//Access by size
newCarManager.getCarsBySize('medium')
