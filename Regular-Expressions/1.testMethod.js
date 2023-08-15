/**
 * with regular Expressions we can be able to search if a specific character or word is present in a string.
 * we can achieve that by adding the word character between two forward slashes.
 * 
 * consider the following example:
 */

const str = 'The President is here in the country';
const strRegx = /is/;


/**
 * so what the .test() method does is that it checks if the word is present in the original string and returns a boolean value.
 */

console.log(strRegx.test(str)) // true

// the program will return true because the word 'is' is present in the string.

// example two:

const testStr = 'I ma the string test';
const testStrRegx = /test/;
console.log(testStrRegx.test(testStr))
// this will print true because we have the word test in the string.

// example 3:

const testStr2 = 'I am the second string test';
const testStr2Regx = /third/;
console.log(testStr2Regx.test(testStr2)) // false 
// this will return false because the word 'third' is not present in the string.