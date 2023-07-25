// when we declare a variable wth var it becomes global or lacal when it is declared inside a function.
// variable declared with scope behave the same as var but when it is inside a block or a statement, it's scope is limited to that block

// example:
// 1. var:
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}

console.log(numArray);
console.log(i);

// output:
// [0,1,2]
// 3

// as we can see the variable declared by var is global and can be accessed outside the block.
// 2. let:

let numArray = [];
for (let i = 0; i < 3; i++) {
  numArray.push(i);
}

console.log(numArray);
console.log(i);

// output:
// [0,1,2]
// ReferenceError: i is not defined (i is not accessible outside the block)

// as we can see the variable declared by let is local and can not be accessed outside the block that it was declared into.

// summary:
// var is globally scoped when declared outside a function and locally scoped when declared inside a function.
// let is block scoped.