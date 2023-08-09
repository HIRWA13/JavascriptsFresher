// given an array `[a, b, c, d, e], make a function that uses destructuring to extract the 2nd and 4th eleements:

const skippie = (arr) => {
    const [,b,,d,] = arr;
    console.log(`the 2nd element is ${b} and the fourth is ${d}`);
}
skippie([1, 2, 3, 4, 5]);