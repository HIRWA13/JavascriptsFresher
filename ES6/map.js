// MAPS in ES6:

// maps are new [key-value] that were introduced in Javascipt ES6
// maps are like twins of objects but they behave totaly different:

// one bigger difference is that the properties(keys) of objects are strings, while for Maps its not the case
// we can have any datatype as a key in a map.

// another differece is that maps are iterables while objects are not iterables.

// creating maps in javascript:

const map = new Map();
console.log(map); // creates an empy map.

// lets add items:
// 1. to add new items in our map we use the [.set()] method:

map.set('iamhirwejr@gmail.com', {
    username: 'hirwa',
    followers: 23,
    city: 'Musanze'
});
map.set('iamjr@gmail.com', {
    username: 'wa13',
    followers: 35,
    city: 'Kigali'
});
map.set('iamhirwe@gmail.com', {
    username: 'rwa',
    followers: 43,
    city: 'Gisenyi'
});

console.log(map);

// 2. to check wether an entry exists in a map, we use [.has()] method and append the its key inside:
console.log(map.has('iamjr@gmail.com')) // returns true because the entry is present in our map.
console.log(map.has('get@gmail.com'))  // returns false because the entry is not present in the map.

// 3. we use the [.get()] method to get the value associated to any key if and only if the key exists in our map.

console.log(map.get('iamhirwejr@gmail.com')); // returns the value associatedd to the key 'iamhirwejr@gmail.com'
console.log(map.get('get@gmail.com'))        // returns undefined.

// 4. we use [.delete()] method to delete and pass in the key hence deleting the whole entry.

map.delete('iamjr@gmail.com');
console.log(map)          // returns our map but with 'iamjr@gmail.com' entry removed.



// 5. to check how many entries we use, the [.size] property
console.log(map.size);

// 6. return the the key-value pairs in arrays
console.log(map.entries());

// 7.with maps we are not limited to use primitives as keys, we can also use non primitives like functions, arrays, methods as the keys in a map element.

map.set(()=>{console.log(10)}, 'result');
console.log(map);

// 8. maps are iterables - they implement Symbol.iterator method and we can use for...of loop to iterate through them.

for (const [key, value] of map) {
    console.log(`the key ${key} has ${value} as a value`);
}

// how to copy maps into other maps:
// to copy a map into another we simply pass it in brackets of the other

const map1 = new Map();
map1.set(1, 'One');
map1.set(2, 'Two');
map1.set(3, 'Three');
map1.set(4, 'Four');

console.log(map1);

// lets copy map1 into map2
const map2 = new Map(map1); // map2 will hold all values from map1.
console.log(map2);  

// map with a spread operator:
console.log([...map2]);  // [ [ 1, 'One' ], [ 2, 'Two' ], [ 3, 'Three' ], [ 4, 'Four' ] ]


// duplicates in a map:
/**
 * adding a key that already exist in a map will not cause an error instead it will overwrite the one which was in 
 * or map before.
 */

map2.set(4, 'Five');
console.log(map2)   // the value of 4 will be overwitten by 'Five' 

const map3 = new Map([[1, 2], [3, 4], [5, 6]])
const map3Iterator = map3[Symbol.iterator]();
console.log(map3)
console.log(map3.keys());
console.log(map3.values());
console.log(map3.entries());

console.log(map3Iterator.next());
console.log(map3Iterator.next());
console.log(map3Iterator.next());
console.log(map3Iterator.next());
console.log(map3Iterator.next());


// WEAKMAPS:
// -> weakmaps are also similar to maps except that the keys in weakmaps must only be objects.
// -> weakmaps are garbag collected
// -> weakmaps are not iterables.

// to create a new weak map:

const weakMap = new WeakMap();
weakMap.set({name: 'foo'}, 'Hello');
weakMap.set({name: 'bar'}, 'there');

console.log(weakMap);