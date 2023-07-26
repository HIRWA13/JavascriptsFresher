// // Javascript ES6 Destructuring

// // Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment).

let foo = ['one', 'two', 'three'];

let [one, two, three] = foo;

console.log(two); // "two"

// example2: 
// let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2


// example3: destructuring with objects
let o = {p: 42, q: true};
let {p, q} = o;

console.log(p); // 42


// example4:
// let a, b;

({a, b} = {a: 1, b: 2});

console.log(a); // 1
console.log(b); // 2


// example5: Assigning to new variable names
// let o = {p: 42, q: true};
// let {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

// example6: Default values
let {a = 10, b = 5} = {a: 3};

console.log(a); // 3


//example7: use desttruncturing to assign variables from nested objects
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true;


const user2 = {
    johnDoe: {
        age: 34,
        email: 'Johndoe@anon.com'
    }
};

const {johnDoe: {age, email}} = user2;
console.log(johnDoe);// // Destruncturing is a new way of assigning values to variables from arrays and objects.

// // example: destructuring with arrays


//destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const removeFirstTwo = (list) => {
    const [a, b, ...arr] = list;
}

const arr = removeFirstTwo(source);

console.log(arr); // should be [3, 4, 5, 6, 7, 8, 9, 10];

// use destruncturing to pass an object as a function's parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const data = ({max, min}) => {
    return (max + min) / 2.0;
}

console.log(data(stats)); // 28.015


// summary:
// Destructuring is a new way of assigning values to variables from arrays and objects.
// Destructuring can be used in locations that receive data (such as the left-hand side of an assignment).