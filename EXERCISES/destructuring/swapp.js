// given an array [a, b], write a function that will accept two values and it will automatically swapp them using destructuring:


const swapEm = () => {
    const [a, b] = ['a','b']
    return `the swapped values of [a, b] are ${b} and ${a}`;
}
console.log(swapEm());