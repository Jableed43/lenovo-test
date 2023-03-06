/* Create a function that receives two numbers and shows the prime numbers between them (it includes both number)
In addition it returns an array with the prime numbers */

let {testNum} = require('./utils')

function primeNumbers(num1, num2) {
    const primeNumbersArray = [];
    let aux = 0; 
    //Validate number parameters
    if( (testNum(num1) ) && (testNum(num2))){ 
        //In case first param is bigger than second
        if(num1 > num2){
            aux = num2;
            num2 = num1;
            num1 = aux;
        }
        for (let i = num1; i <= num2; i++) {
        let flag = 0; 
    
        // Looping through 2 to user input number (current index)
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                //if current number is divisible by 2 or any number lower than it, then flag is 1
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers (flag is equal to 0), then show it
        if (i > 1 && flag == 0) {
            console.log(`${i} is a prime number`);
            primeNumbersArray.push(i) ;
        }
    }
    } else {
        console.error('This function only accepts positive integer number data')
    } 
    return primeNumbersArray; 
}

//Test
primeNumbers(1, 100)
primeNumbers(100)
primeNumbers(-1, -100)
primeNumbers('a', 'b')

console.log(primeNumbers(1, 100));