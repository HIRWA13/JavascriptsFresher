// const { name } = require("ejs");

// what are generator functions:
function* generatorExample() {
    yield 8;
    yield 9;
    yield 10;
    yield 11;
    yield 12;
}

// creating a generator object 
const generator = generatorExample();
// console.log(generator.next()); // call the generator function
// // do something else
// console.log(generator.next()); // call the generator function
// // do something else
// console.log(generator.next()); // call the generator function
// // do something else
// console.log(generator.next()); // call the generator function 
// // do something else
// console.log(generator.next()); // call the generator function
// do something else

// Generator functions can be considered as iterables because the have the default Symbol.iterator method which defines iterable protocol and it also has the .next() method which defines iterator protocol.

// we can use for...of loop with generatos

for(const value of generator) {
    // console.log(value)
}

// using variables in generator functions:
function *sqaured(max) {
    let n = 0;
    while (n < max) {
        n++;
        yield n * n;
    }
}

// for (const n of sqaured(5)){
//     console.log(n)
// }
// console.log(square.next().value);
// console.log(square.next().value);
// console.log(square.next().value);
// console.log(square.next().value);

// getting unique values from an array using generator functions:

function* unique(array) {
    const available = array;    
    while (available.lenght !== 0) {
        const randomIndex = Math.floor(Math.random() * available.length);
        const value = available[randomIndex];

        // remove the used value from the list of available values:
        available.splice(randomIndex, 1)
        yield value;
    }
}

const names = ['Dom', 'Shelly', 'Timy', 'Marie'];

for (const name of unique(names)) {
    console.log(name)
}