// javascript spread operator:


// merging arrays:
const arr1 = [1, 2, 4, 5];
const arr2 = [5, 6, 7, 8];

const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

// clone an array using a spread operator
function arrFunc(arr) {
    return [...arr];
}
console.log(arrFunc([1, 23, 4, 5]));

// clone an array2:
function arrClone(...arr) {
    return [...arr];
}
const arg1 = [1, 2, 3, 4];
const arg2 = [5, 6, 7, 8];
console.log(arrClone(arg1, arg2));

// spread an object:
const obj = {a:1, b:2, c:3};
const obj1 = {d:4, e:5, f:4};

const obj2 = {...obj, ...obj1};
for (const item in obj2) {
    console.log(`${item}: ${obj2[item]}`)
}