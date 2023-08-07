
// q: what are tagged template literals?
// a: tagged template literals are template literals that are passed to a function and then the function can do whatever it wants with them.
// tagged templates are used to create template functions
// the function can do whatever it wants woth the template literals

function highlight (strings, ...values) {
   let str = '';
   strings.forEach((string, i) => {
        str += string + (values[i] || '');
   });
   return str;
}

const dogName = 'swad';
const age = '100';
const sentence = highlight`My dog's name is ${dogName} and he is ${age} years old`;
console.log(sentence);

// example 2

function description(strings, ...values) {
    return values.reduce((string, item, index) =>{
        return `${string}${item}${strings[index+1]}`;
    }, strings[0]);
} 
const fname = 'junior';
const lastn = 'Hirwa';
const myAge = 23;

const describer = description`My name is ${fname} ${lastn} and am ${myAge} years old`;
console.log(describer);

// String.raw
console.log(String.raw`\\n`);


// weaksets
const obj = {name:'jr', age:34}

const wek = new WeakSet();
wek.add(obj);
console.log(wek);

// Array Destructuring:
const numbers = [123, 456, 2];
const [one, two, three = 12] = numbers;
console.log(one)
console.log(two)
console.log(three)


function bottle() {
    return ['beer', 'water']
}

const [red, blue] = bottle();
console.log(red);
console.log(blue);

// nested array destructuring:
const user = [...['some', 'one'], 23];
const [firstName, surname, hisage] = user;


console.log(`${firstName} ${surname} = ${age} years old`);

// chained assignment with destructuring:

let c, d;
let [a, b] = [c, d] = [1, 2];
console.log(b);

// in for loops:
// console.log('array destructuring - for loops:')
// const loop = [[0, 1, 2]];
// for (const [a, b] of loop) {
//     console.log(`${a} => ${b}`);
// }


console.log('Object destructuring:')

const ob = {
    oname: 'jr',
    lname: 'hir',
    address: {
        city: 'kicukiro',
        state: 'hyder'
    }
}

const { oname: firstname, lname:lastname, address:{state} } = ob;
console.log(firstname);
console.log(lastname);
console.log(state);

// array and objects combined:
const arr = [null, [{env:'browser', lang:'ES6'}]];
const [,[{env, lang}]] = arr;
console.log(lang);


// difference between arrow function and regular function:
// -> no argument object

function print() {
    console.log(arguments);
}

print('hello', 400,200);

const printfn = () => {
    console.log(arguments);
}
// printfn('hello', 100, 300);


// tagged templates

const fn = 'junior';
const ag = 23;
const ad = 'Kicukiro';

const hiThere = (strs, ...values) => {
    return values.reduce((str, val, index) => {
        return `${str}${val}${strs[index+1]}`
    }, strs[0]);
}

const  hello = hiThere`Hello my name is ${fn} and am ${ag} from ${ad}`;
console.log(hello);

