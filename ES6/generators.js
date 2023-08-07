// normal function runs from the top to the bottom:
const getEmployee = () => {
    console.log('the function has started');
    const names = ['alec', 'roman', 'betty', 'cole'];
        for (const name of names) {
            console.log(`hello dear ${name}`);
        }
    console.log('the function has ended');
    
}
// getEmployee();

// what if we wanted to print like 3 names only and then take some pause and maybe later we can continue where we left of?
// well in normal functions there is no way we can pause functions iin the middle of its execution but luckily there are new types of functions that are pausable

// those functions are called : GENERATORS.

// Generators
// generators are special functions in javascript that return more values
// normally a function returns a single value, but generator functions
// have more than returns

// to make a function a generator we add a star* on on the function 
// keyword [function*] or on its name [function *names(){...}]


function* getEmployeeNames() {
    console.log('the function has started');
    const empNames = ['alisa', 'cole','christa'];
    for(const name of empNames) {
        yield name;
    }
    console.log('the function has ended');
}
const getNames = getEmployeeNames();
let result = getNames.next().value;
console.log(result);

let result1 = getNames.next().value;
console.log(result1);

let result2 = getNames.next().value;
console.log(result2)

let result3 = getNames.next().value ='done executing';
console.log(result3);


function* simpleGenerator() {
    yield 1
    yield 2
    yield 3
}

// how to use Generators:
// so inorder to use a Generator function we need to run the Generator function that returns to us the Generator object and the generator object allows us to manipulate the generator function.

const generatorObject = simpleGenerator();

// when the generator function is run, nothing happens instead it returns an iterarator and that iterator can be used to execute the actual  generators inner code
