/* 
- testnum: checks if a number is valid, positive and integer
- randomId: generates a random unique alphanumeric id
*/

module.exports = { 
    testNum(number) {
    if(typeof number === 'number' && Math.sign(number) === 1 && Number.isInteger(number) && !Number.isNaN(number)){
        return true
    }
}
,
randomId(length = 6) {
    return Math.random().toString(36).substring(2, length+2);
  }

}