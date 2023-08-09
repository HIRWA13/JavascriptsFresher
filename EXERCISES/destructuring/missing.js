// given an array containing n distic numbers from 0 to n, with one number missing, find the missing number. write a function that takes the array as input and returns the missing number

// a function that takes an array.

const findMissing = (arr) => {
    const firstItem = arr[0];
    const lastItem = arr[arr.length - 1];
    const newItems = []
    for(let i = firstItem; i <= lastItem; i++) {
        newItems.push(i)
    }
    // original items: [0, 1, 2, 4, 5, 6]
    // new items: [0, 1, 2, 3, 4, 5, 6]
   const filtered = newItems.filter((item) => !arr.includes(item)).join("")
   return `the missing number in the given array is ${filtered}`;
}


// test cases:
console.log(findMissing([0, 2, 3,4,5, 6]))