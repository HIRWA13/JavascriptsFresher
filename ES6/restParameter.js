// Javascript Es6 - Rest Parameter

// Rest Parameter:
// Rest parameter is a new way to handle function paramenters.
// Rest paramater is always the last parameter in a function and it is prefixed with three dots (...)
// Rest parameter is used to get all the arguments passed to a function.
// Rest parameter is an array because it collects all arguments passed to a function into an array.

// example:
// 1. function without rest parameter:
const withoutRest = (a, b) => {
    console.log(a, b);
}
withoutRest(1, 2);
withoutRest(1, 2, 3);
withoutRest(1, 2, 3, 4);

// output:
// 1 2 -> for the first function call
// 1 2 -> for the second function call
// 1 2 -> for the third function call

// as you can see above, the function only takes two arguments and ignores the rest.

// 2. function with rest parameter:
const withRest = (...args) => {
    console.log(args);
}
withRest(1, 2);
withRest(1, 2, 3);
withRest(1, 2, 3, 4);
withRest(1, 2, 3, 4, 5);

// output:
// [1, 2] -> for the first function call
// [1, 2, 3] -> for the second function call
// [1, 2, 3, 4] -> for the third function call
// [1, 2, 3, 4, 5] -> for the fourth function call

// as you can see, the function takes all the arguments and stores them into an array. and we can access them using array methods.

// example of how we can be able to access the arguments using array methods:
const withRestArray = (...args) => {
    console.log(args);
    console.log(args.slice(0, 2));
    console.log(args.slice(2));
}

withRestArray(1, 2, 3, 4, 5);

// output:
// [1, 2, 3, 4, 5]
// [1, 2]
// [3, 4, 5]


// summary:
// Rest parameter is a new way to handle function paramenters and it makes it easier for us to handle future changes to our functions. because we do not have to change the function definition every time we add a new parameter.