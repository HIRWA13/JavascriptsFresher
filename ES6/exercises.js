// q: what is wrong with the following code:
/**
 *  const promise = Promise.all([
         new Promise(resolve => resolve(1)),new Promise(resolve => resolve(2)),new Promise(resolve => resolve(3))
      ]);
      promise
        .then(value => { assert.deepEqual(value, [1, 2]); done(); })
        .catch(e => done(new Error(e)));
    });
 */

// a: the problem with the code above is that the promise.all() method takes an array of promises, and the promises in the array are not promises, they are just values. so we need to wrap them in a promise, like so:

const promise = Promise.all([
    new Promise(resolve => resolve(1)),new Promise(resolve => resolve(2)),new Promise(resolve => resolve(3))
 ]);
 promise
   .then(value => { assert.deepEqual(value, [1, 2]); done(); })
   .catch(e => done(new Error(e)));
   
// q: what did you change in the code above?
// a: I wrapped the values in a promise, like so:
// new Promise(resolve => resolve(1))
// q: so what is the difference between the above code and the code and the one you wrote?
// a: the difference is that the code above is not a promise, it is just a value, and the code I wrote is a promise, which is what the promise.all() method takes.