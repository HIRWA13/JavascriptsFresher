// sets in javascript:

// sets are new built in collections introduced in javascript es6.
// sets are iterables
// they work in a similar way like arrays but they have some differenceces:

// - differences between a set and an array
// arrays are index based - while Sets are not
// arrays store duplicates - while Sets stores only unique values.
// to access the elements of an array we refer to their indexes - while for Sets we just refer to the number itself 

// the reason why we refer to the index to access the array elements is because arrays contain duplicates.
// for Sets because they don't contain duplicates we just refer to the number itself because it is the only one present there.


// working with sets:

// to create a Set: we have two ways we can use to create a Set:
// 1. by using the new keyword to create its instance .
// 2. by using  a collection like an array.

// 1 using the new keyword:
const set = new Set();  // this creates a new empty set:
console.log(typeof set); // Sets are objects and using the typeof operator on them returne object.

// 2. creating a set using an array:
const numbers = [1, 2, 3, 4, 5, 2];
const newNumbers = new Set(numbers);
console.log(newNumbers); // when we run this we will get a new set but with the two at the end removed because a Set does not take up duplicates.


// working with sets: there are some methods we can use to work with sets:

// 1. to check how many elements our set has we use the [.size] property
console.log(newNumbers.size); // it shows us the size of our array

// 2.to add new et elements we use the [.add()] method:
newNumbers.add(6);
newNumbers.add(7);
newNumbers.add(8);
 
console.log(newNumbers); // now if we log it, we will see that new elements has been added.

// 3.to delete an element from a Set, we use the [.delete()] method and then we refer to the element that we want to delete:
newNumbers.delete(4);
console.log(newNumbers); // now if we log it we will see that element 4 has been deleted

// 4. iterating over a Set:

for (const item of newNumbers) {
    console.log(item);
} // Sets are also iterators in javascript, so the  for...of loop works on them.


// 5.to check if an element is present in a set we use [.has()] method
console.log(newNumbers.has(3)); // returns true if the element exists in a set
console.log(newNumbers.has(0)); // returns false because zero is not present in our set.

// 6. to make our set empty we use [.clear()] method:
newNumbers.clear();  // this deletes all the elements that are present in our set.
console.log(newNumbers); 

// WEAKSETS:

// WeakSets are also like normal but they have key differences:
// 1. weaksets only store objects
// 2. weak sets are not iterables
// 3. weaksets have n .clear() method

// advantage of weaksets over sets:
// weaksets use garbage collection mechanism [grabage collection - mechanism present in javascript where memory which is not being used is freed]

// creating a weakset:
const student1 = {name: 'lasta', age: 30}
const student2 = {name: 'fara', age: 20}
const student3 = {name: 'iya', age: 50}

const newWeakSet = new WeakSet();

// newWeakSet.add(student1);
// newWeakSet.add(student2);
// newWeakSet.add(student3);
console.log(newWeakSet);