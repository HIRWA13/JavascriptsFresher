// Javascript shift method:

// the shift method is used to remove the first element from an array and it returns the value that was removed.
// the shift method is the opposite of the unshift method. -> removes the array elemtent from the beginning of the array.

// syntax:
// array.shift();

// example:
// 1. remove the first element from an array:
const array = [1, 2, 3, 4, 5];
array.shift();
console.log(array); // [ 2, 3, 4, 5 ]

// 2. remove the first element from an array and store it in a variable:
const array1 = [1, 2, 3, 4, 5];
const removed = array1.shift();
console.log(removed); // 1
console.log(array1); // [ 2, 3, 4, 5 ]