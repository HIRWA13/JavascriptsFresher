/**
 * in Javascript, it is good a practice to assign all our variables using const by default, unless we know twe will need to reassign the value. 
 * Only in that case, we use let.
 */
// when it comes to declaring variables with const:
// 1. the variable cannot be re-assigned
// 2. the variable has to be initialized when declared
// 3. the variable is block scoped

// example:
const myName = "John";
console.log(myName);

// myName = "Jack"; // TypeError: Assignment to constant variable.
// const myName; // SyntaxError: Missing initializer in const declaration

// const myName = "Jack"; // SyntaxError: Identifier 'myName' has already been declared

// using const with arrays:
const myArray = [];
myArray.push(1);
myArray.push(2);
console.log(myArray);

// myArray = [1,2,3]; // TypeError: Assignment to constant variable. -> we can not reassign the variable myArray
// const myArray = [1,2,3]; // SyntaxError: Identifier 'myArray' has already been declared -> we can not redeclare the variable myArray

/**
 * when we use the const keyword with arrays, it does not mean that the value is immutable, it means that the variable identifier cannot be reassigned.
 */

// using const with objects:
const myObject = {
  name: "John",
  age: 30
};
// console.log(myObject);

myObject.name = "Jack";
console.log(myObject);

// myObject = {
//   name: "Jack",
//   age: 30
// }; // TypeError: Assignment to constant variable. -> we can not reassign the variable myObject

// const myObject = {
//   name: "Jack",
//   age: 30
// }; // SyntaxError: Identifier 'myObject' has already been declared -> we can not redeclare the variable myObject

/**
 * as we have seen above, const does not protect our data from being changed and messed with but it does protect us from accidentally reassigning the variable identifier.
 * so when we really want to protect our data from being changed, we use Object.freeze() method.
 * Object.freeze() method freezes an object. A frozen object can no longer be changed.
 */

// example:
const myObject1 = {
  name: "John",
  age: 30
};

Object.freeze(myObject1);

myObject1.name = "Jack";
console.log(myObject1);
myObject1.age = 40;
console.log(myObject1);
myObject1.address = "USA";
console.log(myObject1);
// output:
// { name: 'John', age: 30 }
// { name: 'John', age: 30 }
// { name: 'John', age: 30 }

/**
 * as we can see above, the data inside the object myObject1 can not be changed.
 */