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


// arrow functions and "this" keyword:
// with regular functions, this is defined depending on how the function is called.
// but when it comes to arrow functins, this is defined depending on where the function is defined.(where that function is located)

// // example:
// 1. regular function:
const muRegularFunction = function() {
    console.log(this);
}
// muRegularFunction();

// 2. arrow function:
const myArrowFunctionThis = () => {
    console.log(this);
}
myArrowFunctionThis();

// so, the arrow function is defined in the global scope and "this" refers to the global object which is the window object.
// but if define an arrow function inside an object, "this will refer to that object."

// // example:
const myObject = {
    name: "John",
    age: 30,
    myMethod: function() {
        const myArrowFunction = () => {
            console.log(this);
        }
    }
}

myObject.myMethod(); // output: {}
myObject.myMethod.myArrowFunction(); // output: {}

// so, the arrow function is defined inside the myObject object and "this" refers to the global object which is the window object.
