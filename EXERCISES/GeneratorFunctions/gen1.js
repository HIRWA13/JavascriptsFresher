function* displayNames(names) {
    yield ;
}
const names = [1, 2, 3, 4,5];
const genNames = displayNames(names);

console.log(genNames.next());
console.log(genNames.next());
console.log(genNames.next());
