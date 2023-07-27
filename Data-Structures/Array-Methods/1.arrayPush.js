// in this file I will be going over the methods that are available to us in the array data structure and how to use them.

// // 1. Array.prototype.push():
// what is the meaning of Array.prototype?
// the Array prototype is the template object for all arrays in Javascript and when we write it, we are just telling Javascript to look for a specific method on the Array prototype object.

// about Array.prototype.push():
// the above line means that the push method is available to us and can be used on any array.

// the push method is used to add one or more elements to the end of an array and returns the new length of the array.

// syntax:
// array.push(element1, element2, ..., elementN);

// example:
// 1. add one element to the end of an array:
const array = [1, 2, 3, 4, 5];
array.push(6);

console.log(array); // [ 1, 2, 3, 4, 5, 6 ]

// the return value of the push method is the new length of the array

