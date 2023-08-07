// Javascript unshift method:

// the unshift method is used to add one or more element to the beginning of an array and returns the new length of the array.
// it is the opposite of the push method.

// syntax:
// array.unshift(element1, element2, ..., elementN);

// example:
// 1. add one element to the beginning of an array:
const array = [1, 2, 3, 4, 5];
array.unshift(0);
console.log(array); // [ 0, 1, 2, 3, 4, 5 ]

// 2. add multiple elements to the beginning of an array:
const array1 = [1, 2, 3, 4, 5];
array1.unshift(-2, -1, 0);
console.log(array1); // [ -2, -1, 0, 1, 2, 3, 4, 5 ]

// 3. using unshift to add elements in an empty array:
const array2 = [];
array2.unshift(1);
array2.unshift(2);
array2.unshift(3);
array2.unshift(4);
console.log(array2); // [ 4, 3, 2, 1 ]

// 4. using unshift to add elements in an empty array using a for loop:
const array3 = [];
for (let i = 1; i <= 5; i++) {
    array3.unshift(i);
}
console.log(array3) // [ 5, 4, 3, 2, 1 ]
