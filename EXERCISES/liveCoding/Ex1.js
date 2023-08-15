/**
 * implement a function called `combineArrays` that can take one or more arrays of the same length as arguments and return an array of all the provided arrays combined.

The arrays should be combined by going through all of them in the same order they were passed in, by taking all the first element from each array, followed by second elements from each array, third elements from each array and so on until all elements are combined in a single array(check examples for clarification)

You are assured that the function will always take arrays of the same length, and If only one array is passed, it should be returned unchanged.
 */

const combineArrays = (...arrays) => {
    const result = [];
    for(let i = 0; i < arrays[0].length; i++) {
        for(let j = 0; j < arrays.length; j++) {
            result.push(arrays[j][i])
        }
    }

}
 [[],[],[]]
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combined = combineArrays(arr1, arr2, arr3);
console.log(combined); // [1, 4, 7, 2, 5, 8, 3, 6, 9]