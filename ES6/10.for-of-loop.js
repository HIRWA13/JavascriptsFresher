// Before diving in the for of loop, we must understand what is iteration?

// Iteration is the process of accessing each item in a collection one at a time and in order, usually with the intention of using each item to perform some operatin.

// Iteration is a general term for taking each item of something, one after another. Any time we use a loop, we are iterating over a collection of data, one item at a time. JavaScript offers several built in ways to iterate over data structures. We have already seen how to use the for loop to iterate over arrays. We can also iterate over every character in a string, each property in an object, every item in a set, every element in a map, and so on.

// so what is a for - of loop?

// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.


// // example1:

const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// the above code uses the traditional for loop to iterate over the array and print each item to the console.

// we can use the for... of loop to perform what we did above in a more concise way.

for(let item of arr) {
    console.log(item);
}
// the above code uses the for...of loop to iterate over the array and print each item to the console.

// // example2:

const str = 'string';

for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
// the above code uses the traditional for loop to iterate over the string and print each character to the console.

// we can use the for... of loop to perform what we did above in a more concise way.

for(let char of str) {
    console.log(char);
}
// the above code uses the for...of loop to iterate over the string and print each character to the console.

// // example3:

const obj = {
    name: 'John',
    age: 20
};

for(let key in obj) {
    console.log(key);
}

// the above code uses the for...in loop to iterate over the object and print each key to the console.

// we can use the for... of loop to perform what we did above in a more concise way.

for(let key of Object.keys(obj)) {
    console.log(key);
}
// the above code uses the for...of loop to iterate over the object and print each key to the console.

// // example4:

const set = new Set([1, 2, 3, 4, 5]);

for(let item of set) {
    console.log(item);
}
// the above code uses the for...of loop to iterate over the set and print each item to the console.

// // example5:

// loop through an array of days  and print each day to the console with the first character capitalized using a for...of loop:

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

for(let day of days) {
    console.log(day[0].toUpperCase() + day.slice(1));
}