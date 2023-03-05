/* returnPairsNum is a function that receives as parameter an array of positive integers and returns an array with only the input’s pair numbers. 
Down below you will find a test section. */

function returnPairsNum(arrayInt) {
    //Check if parameter is an array
  if (Array.isArray(arrayInt)) {
    const pairNums = [];
    for (let index = 0; index < arrayInt.length; index++) {
      const element = arrayInt[index];
      //Check if each element is valid and a positive integer number
      if(typeof element === "number" && !Number.isNaN(element) && Math.sign(element) === 1 && Number.isInteger(element)){
        // Check if element is a pair number
        if (element % 2 === 0) {
            pairNums.push(element);
          }
      } else {
        console.error('Error: your array should only contain positive integer numbers');
        return;
      }
    }
    console.log(pairNums);
    return pairNums;
  } else {
    console.error("Error: This function only accepts an array of positive integer numbers");
    return;
  }
}

// Test

let arrayPositive = [1,2,3,4,5,6,7,8,9,10]
returnPairsNum(arrayPositive)

let arrayLetters =  ['a', 'b', 'c']
returnPairsNum(arrayLetters)

let notArrayLetter = 'a'
returnPairsNum(notArrayLetter)

let notArrayNumber = 1
returnPairsNum(notArrayNumber)

let notPositiveArray = [-1]
returnPairsNum(notPositiveArray)

let floatArray = [1.2, 0.5, 6.5]
returnPairsNum(floatArray)


