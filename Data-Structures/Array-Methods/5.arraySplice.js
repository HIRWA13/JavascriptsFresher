// Javascript splice method:

// the splice method is used to add or remove elements from an array and it returns the removed elements.
// with the splice method, we can remove elements from the array without leaving holes in the array.

// syntax:
// array.splice(index, howmany, item1, ....., itemX)

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

/**
 * splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of items in the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
newArray has the value ['really', 'happy'].

*/

// exercise:
// We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

let arr = [2, 4, 5, 1, 7, 5, 2, 1];

// solution: 
arr.splice(1,4);
console.log(arr); // [ 2, 5, 2, 1 ]
