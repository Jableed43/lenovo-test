/* Create a function that receives a String as parameter and returns a Boolean value indicating if the word is a palindrome* or not. 
Down below you will find a test section. */

function checkPalindrome(string) {
    if(typeof string === 'string'){
    string = string.trim().toLowerCase()
    //Convert string to an array where every index is a letter
    const arrayValues = string.split('');
    // reverse the array
    const reverseArrayValues = arrayValues.reverse();
    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string === reverseString) {
        console.log(`"${string}" is a palindrome word`);
        return true;
    }
    else {
        console.log(`"${string}" is not a palindrome word`);
        return false;
    }} else {
        console.error('This function only accepts strings, please insert a valid data')
        return;
    }
}

/* Test */

checkPalindrome('lobo')
checkPalindrome('obbo')
checkPalindrome('menem')
checkPalindrome('otto')
