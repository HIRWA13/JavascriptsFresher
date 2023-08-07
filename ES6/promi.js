// Javascript promises recap:
// the concept of Promises is the same as Promises in real life, always there are two parties invloved:
//-> the promise maker and 
// -> the one whose's promise was made for.

const { resolve } = require("path");

// the promise maker makes a promise and be like:
// hey, I don't have what you need now, but keep doing what you were doing and I promise you to go and find  what you want.

// -> with promises when we request something like for example data from external sources, our program won't stop running waiting for the promise to be resolved or rejected.

// -> when the promise is back, it gives us one of the two options, either it is resolved(means it was able to finc what we requested it to go find for us) or it is rejected (means it was not able to get what we requested it).

// an example of a promise of getting the weather:

// const newPromise = () => {
//     return new Promise((resolve, reject) => {
//         resolve('h');
//         // reject('Oops, weather not found');
//     })
// }

// const promise = newPromise();


// // promise responses:
// const onSuccess = (success) => {
//     console.log(`the weather is successfull retrieved: it is ${success}`)
// }

// const onError = (error) => {
//     console.log(`failed to retrieve the weather: ${error}`);
// }

// // promise receiver
// promise
//     .then(onSuccess, onError);




// multiple promises: 
// -> with multiple promises, the program will be able to run even when one or more promises fail.

const proxy = new Promise((resolved, rejected) => {
   resolved('I learnt proxies');
});

const generators = new Promise((resolved, rejected) => {
    resolved('I learnt generators');
});

const promises = new Promise((resolved, rejected) => {
    resolved('I learnt promises');
});




Promise.all([
    proxy,
    generators,
    promises
]).then((message)=> {
        console.log(`${message}`)
}
);


// promises:
// promises prevents us from falling into callback hell:
// -> like chained callbacks