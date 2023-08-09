// write a function that takes an object as argument and then returns an array of its properties:

/**
 * // get the object
 * // disaassemble it and return its properties in an array
 * // return the array of the properties
 */

const newObj = {
    name: 'hello',
    age: 23,
    address: {
        city: 'kgl',
        state: 'nowhere'
    }
}

const objKeys = (obj) => {
    return Object.keys(obj);
}
console.log(objKeys(newObj))