// Javascript arrow functions:
// 1. arrow functions:
// arrow functions are a new way to write anonymous functions and were introduced first in ES6
// arrow functions are always anonymous
// arrow functions are always function expressions because they are always assigned to a variable
// arrow functions do not have their own "this" keyword
// arrow functions are always concise, meaning that they do not have a body and they automatically return

// // example:
// 1. function expression:
const myFunction = function() {
    console.log("Hello World from the Flash!");
};
myFunction();

// 2. arrow function:

const myArrowFunction = () => console.log("Hello World from the Arrow!");
myArrowFunction();

// 3. arrow function with parameters:

const myArrowFunctionWithParameters = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old!`);
}
myArrowFunctionWithParameters("John", 30);

// 4. arrow function with one parameter:

const myArrowFunctionWithOneParameter = name => console.log(`Hello ${name}!`);
myArrowFunctionWithOneParameter("John");

// 5. arrow function with no parameters:

const myArrowFunctionWithNoParameters = () => console.log("Hello World!");
myArrowFunctionWithNoParameters();

// 6. arrow function with return statement:

const myArrowFunctionWithReturnStatement = () => {
    return "Hello World!";
}
console.log(myArrowFunctionWithReturnStatement());

// smmary:(KIM) -> Keep In Mind
// arrow functions are always anonymous
// arrow functions are always function expressions because they are always assigned to a variable
// arrow functions do not have their own "this" keyword