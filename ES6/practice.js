// proxies:
// 1. logging proxy:
// -> create a logging proxy that will intercepts property access on an object and logs the property name and value everytime it is accessed. the proxy should not modify the behaviour of the original object, only log the accesses:

//-> problem:
// -> create a proxy that will will help us to access the property name and value from an object, the proxy should be responsible to check the accessed value if its there it should bring the property name and a value assocciated to it if not maybe set a default value.

// Steps:
// -> create a proxy
// -> access the property and its value via the proxy using the get method:
// -> validate and return

const loggingObject = {firstName: 'Hirwa'};

// create a proxy:
const loggingObjectProxy = new Proxy(loggingObject, {
    // validate:
    get: (target, property)=> {
        console.log(`getting the property name and value from the object:`)
        return property in target ? `property: ${property} holds ${target[property]} as it's value` : `property is not available in our object`;
    }
});

// test:
loggingObjectProxy.secondName = 'Junior';
console.log(loggingObjectProxy.secondName);

// 2.validate inputs for a function:

const args = {};

const validArgs = new Proxy(args, {
    set: (obj, key, value)=>{
            if(typeof value !== 'number' || Number.isNaN(value)){
                throw new Error('arguments must be numbers')
        }
        obj[key] = value;
    }
});

validArgs.a = 1;
validArgs.b = 2;

console.log(args);
const func = ({a , b}) => {
    console.log(`the sum is ${a + b}`);
}
func(args);




// generator functions:

// 1. fibonacci series
// starts with 0 and 1 and the next number must be the sum of the 
// previous ones:
// eg: fib of 5: 01123


// given a maximum input number, how can we get the fibonacci series of that number

// steps:
// -> create the generator function
// -> give it an argument of the maximum
// -> initialize n to start from zero
// -> use a wile loop to loop through the maximum number

function* fibonacci(max) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    while(n1 <= max) {
        yield n1;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

// const fib = fibonacci(6);
// for (const n of fib){
//     console.log(n);
// }


// promises:
//Write a function that returns a Promise which resolves after a specified delay (in milliseconds) with a given value.

const promiseFunc = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('resolved')      
        }, 2000);
    })
}

// const promise1 = promiseFunc();

// success
// const onSuccess = (message) =>{
//     console.log(`the promise is ${message} after 2 seconds`)
// }
// promise1.then(onSuccess);


const stringPromise = (str) => {
    return new Promise((resolve, reject)=> {
        if(str.length <= 5) {
            resolve(`the promise resolved to ${str}`)
        } else {
            reject(`the promise was rejectd with an Error`)
        }
    })
}

const promise2 = stringPromise('hellow');

// success:
const success = (message)=>{
    console.log(`${message}`)
} 
// err:
const error = (err) => {
    console.log(`${err}`)
}

promise2.then(success, error)

