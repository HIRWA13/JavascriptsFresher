// what are proxies:
// a proxy is a special object that acts as a keeper of plain objects: -> they observe and sets permission to everything that happens to objects.
// you can think proxies as gatekeepers of objects because they allow some operations to pass through and prevent others also

// // proxy creation:
// const target = {};
// const handler = {};

// const proxy = new Proxy(target, handler);
// proxy.exposed = true;

// console.log(target.exposed);

// traps are methods that are used to intercept with underlying object that the proxy is working in they are the ones that allows us to get, assign or prevent anything to be done on the object they have at all.


// get trap
// -> get traps allows us to access the objects interal properties
// -> the get trap observes and perform validation depending on the kind of property you want and then it will give you the result based on wether the property was found or not.

// const target = {};
// const handler = {
//     get: (obj, key) => {
//         console.info(`value on: ${key} property`);
//         return  key in obj ? obj[key] : 'no key available';
//     }
// };

// const proxy = new Proxy (target, handler);
// proxy.firstName = 'Junior'
// console.log(proxy.age);

const target = {};
const handler = {
    get: (target, key) => {
        console.log(`getting value available on: ${key} property`);
        return key in target ? `value on property: ${key} is ${target[key]}` : 'empty'
    },
    set: (target, key, value) => {
        if(key === 'age') {
            if(typeof value !== 'number' || Number.isNaN(value)) {
               throw new Error('age must be a number');
            }
            if(value < 0) {
                throw new Error('age can not be a negative number')
            }
            target[key] = value;
        }
    } 
}

const proxyfy = new Proxy(target, handler);
proxyfy.firstName = 'Hirwa'
console.log(proxyfy.firstName);

proxyfy.age = 'yound';
console.log(proxyfy.age)


// the main goal of proxies is to observe what is being done with the object properties and helps in performing validation.

// the set trap:
// the set trap, comes in when we are trying to set or assign values to properties right,


// summarry:
// -> get validates properties
// -> set validates properties that we are trying to set
