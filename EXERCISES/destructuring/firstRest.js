// given an array `[first, ...rest]` write a function that use destructuring to extract the first element and the rest of the elements:

const findRest = (arr) => {
    const [first, ...rest] = arr;
    console.log(`the first item is ${first} and the rest items are ${rest}`)
}
findRest([1, 2, 3, 4, 5, 6, 7]);