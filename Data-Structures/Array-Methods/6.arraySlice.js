// Javascript slice method:

// the slice method is used to extract a sectio of an array and returns a new array.
// syntax:

// array.slice(start-index(included), end-index(excluded));

// example:
// 1. extract a section of an array:
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 3);
console.log(newArray); // [ 2, 3 ];

// 2. copy an array elements using slice:
const array1 = [1, 2, 3, 4, 5];
const newArray1 = array1.slice();
console.log(newArray1); // [ 1, 2, 3, 4, 5 ]




const duplicates = (str) => {
    let arr = str.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 2]) {
            newArr.push(arr[i + 2]);
        }
    }
    return newArr.join('');
}

// test
console.log(duplicates('abccdeee')); // cceee