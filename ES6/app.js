const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numIterator = arr[Symbol.iterator]();

console.log(numIterator)
for(const n of arr) {
    console.log(n);
};

const array = [1, 'Basketball', true, false, '1'];
const set = new Set(array);
console.log(set);