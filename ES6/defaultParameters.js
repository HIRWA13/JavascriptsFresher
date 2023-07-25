// ES6 introduced a way of setting default parameters for functions. so that if we do not pass any arguments during function call, the default parameters will be used.
// the use of default parameters is optional. so even if we do not use them, the function will still work.
// The default parameter kicks in when the argument is not specified (it is undefined).

// example:
// 1.function without default parameters:
function myfunction(name, age) {
    console.log(`Hello ${name}, you are ${age} years old!`);
}
myfunction("John", 30);
myfunction("John");
myfunction();

// output:
// Hello John, you are 30 years old! -> for the first function call
// Hello John, you are undefined years old! -> for the second function call
// Hello undefined, you are undefined years old! -> for the third function call

// as you can see above, if we do not pass any arguments during function call, the parameters will be undefined.

// 2. function with default parameters:
function myFunction(name = "John", age = 30) {
    console.log(`Hello ${name}, you are ${age} years old!`);
}
myFunction("Jack", 40);
myFunction("Jack");
myFunction();

// output:
// Hello Jack, you are 40 years old! -> for the first function call
// Hello Jack, you are 30 years old! -> for the second function call
// Hello John, you are 30 years old! -> for the third function call

// as you can see above, if we do not pass any arguments during function call, the default parameters will be used.