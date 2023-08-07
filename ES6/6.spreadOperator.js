// Javascript Spread operator:

// Spread operator:
// we can use the spread operator as a new way  to copy arrays and objects.
// the spread operator is denoted by three dots (...)
// the spread operator expands an array into its elements.
// the spread operator expands an object into its properties.
// also we can use the spread operator to concatenate arrays.
// the spread operator is is used also to pass arguments to functions as an array but when used in this way, it is called the rest parameter.

// example:

// 1. copying arrays using the spread operator:
const myArray = [1, 2, 3, 4, 5];
const newArray = [...myArray];
console.log(newArray);

// output:
// [ 1, 2, 3, 4, 5 ]
// using the spread operator we were able to copy the elements of myArray into newArray.

// 2. copying objects using the spread operator:
const myObject = {
    name: "John",
    age: 30
}
const newObject = {...myObject};
console.log(newObject);

// output:
// { name: 'John', age: 30 }
// using the spread operator we were able to copy the properties and values of myObject into newObject.

// 3. concatenating arrays using the spread operator:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray);

// output:
// [ 1, 2, 3, 4, 5, 6 ]
// using the spread operator we were able to concatenate array1 and array2 into concatenatedArray.

// 4. passing arguments to functions using the spread operator:
const myFunction = (...args) => {
    console.log(args);
}
myFunction(1, 2, 3, 4, 5);

// output:
// [ 1, 2, 3, 4, 5 ]
// using the spread operator, the function can take any amount of arguments.

// summary:
// the spread operator is denoted by three dots (...)
// the spread operator expands an array into its elements.
// the spread operator expands an object into its properties.
// also we can use the spread operator to concatenate arrays.
// the spread operator is is used also to pass arguments to functions as an array but when used in this way, it is called the rest parameter.


// difeerence between spread operator and rest parameter:

// the spread operator is used to expand an array into its elements.
// while the rest parameter is used to pass arguments to functions as an array.

// the rest parameter is used to bundle elements back into an array
// with the rest parameter, we are representing many items.