// Javascript ES6 Template Literals

// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

// in few words: template literals are string literals that can span multiple lines and can hold some other expressions inside them. 

// Basic literal string creation
// In ES6, you can create strings using template literals:

// const a = `foo`;
// const b = `bar`;

// console.log(a); // foo
// console.log(b); // bar

// Multi-line strings
// Prior to ES6, the general approach to multiline strings in JavaScript was to concatenate strings using the + operator:

// // ES5
var multiLineString = 'This is the first line\n' +

    'This is the second line\n' +

    'This is more...';

console.log(multiLineString);

// // ES6
const multiLineString2 = `This is the first line
This is the second line
This is more...`;

console.log(multiLineString2);

// Expression interpolation
// Template literals can contain placeholders for string substitution using the ${ } syntax, as demonstrated below:

// // ES5
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// // "Fifteen is 15 and
// // not 20."

// // ES6
const a2 = 5;
const b2 = 10;
console.log(`Fifteen is ${a2 + b2} and
not ${2 * a2 + b2}.`);

// // "Fifteen is 15 and
// // not 20."

// Nesting templates
// Template literals can be nested:

// // ES5
var classes = 'header '
    + (isLargeScreen() ?
        'icon-large' : '')
    + anotherFunction()
    + ' footer';

// // ES6
const classes2 = `header ${isLargeScreen() ? `icon-large` : ``} ${anotherFunction()} footer`;


// exercise:Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

[
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
];

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
        const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
        return failureItems;
}