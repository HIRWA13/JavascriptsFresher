// Es6 object literal short hand
// 1. If the property name and value are the same, we can omit the value.
// 2. If the property name and value are the same, we can omit the colon.
// 3. the function keyword gets removed
// 4.If the property name and value are the same, we can omit the function keyword when declaring methods inside objects.
// 5. If the property name and value are the same, we can omit the colon and the function keyword when declaring methods inside objects.


// wxample1:

var name = "John";
var age = 20;
var person = {name, age};

console.log(person); // {name: "John", age: 40};

// example2:

let type = 'Quartz';
let color = 'red';
let mode = 'silent';

const watchObj = {
    type, 
    color, 
    mode,
    alarm() {
        console.log('beep beep');
    }
};

console.log(watchObj); // {type: "Quartz", color: "red", mode: "silent"}
watchObj.alarm(); // beep beep

// in es6, the function keyword is not needed when declaring methods inside objects.