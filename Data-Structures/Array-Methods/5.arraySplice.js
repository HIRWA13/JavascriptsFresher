// Javascript splice method:

// the splice method is used to add or remove elements from an array and it returns the removed elements.
// with the splice method, we can remove elements from the array without leaving holes in the array.

// syntax:
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// example:
// 1. remove 0 (zero) elements from index 2, and insert "drum":
const array = [1, 2, 3, 4, 5];
array.splice(2, 0, "drum"); // here we are saying, remove 0(zero) at index 2 and insert "drum" at the same index. -> its like we are ////replacing the element at index 2 with "drum".
console.log(array); // [ 1, 2, 'drum', 3, 4, 5 ]

// 2. remove 1 element from index 3:
const array1 = [1, 2, 3, 4, 5];
array1.splice(3, 1);
console.log(array1); // [ 1, 2, 3, 5 ]

// 3. remove 1 element from index 2, and insert "trumpet":
const array2 = [1, 2, 3, 4, 5];
array2.splice(2, 1, "trumpet");
console.log(array2); // [ 1, 2, 'trumpet', 4, 5 ]

// 4. remove 2 elements from index 0, and insert "trumpet" and "drum":
const array3 = [1, 2, 3, 4, 5];
array3.splice(0, 2, "trumpet", "drum");
console.log(array3); // [ 'trumpet', 'drum', 3, 4, 5 ]

// 5. remove 2 elements from index 2:
const array4 = [1, 2, 3, 4, 5];
array4.splice(2, 2);
console.log(array4); // [ 1, 2, 5 ]

// 6. remove 1 element from index -2:
const array5 = [1, 2, 3, 4, 5];
array5.splice(-2, 1);
console.log(array5); // [ 1, 2, 3, 5 ]


// so, the splice method is used to add or remove elements from an array and it returns the removed elements.