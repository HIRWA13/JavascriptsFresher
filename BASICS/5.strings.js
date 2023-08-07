// strings in javascript:
// - strings are written with quotes: " " or ' '
// - you can use quotes inside a string, as long as they don't match the quotes surrounding the string:
// - you can use backticks to create template literals:
// - you can use the backslash (\) to escape quotes:
// - you can use the backslash (\) to escape characters:
// - you can use the backslash (\) to escape line breaks:
// - you can use the backslash (\) to escape tabs:
// - you can use the backslash (\) to escape backslashes:
// - you can use the backslash (\) to escape unicode characters:

// how to declare a string:
var string = "string";
var string = 'string';
var string = `string`;

// how to declare a string with quotes inside:
var string = "string's";
var string = 'string"s';
var string = `string's"`;

// how to declare a string with backticks:
var string = `string`;

// how to declare a string with backticks and quotes inside:
var string = `string's"`;

// how to declare a string with backticks and variables inside:
var string = `string ${string}`; // ${} is called a placeholder
var string = `string ${string} ${string}`; // ${} is called a placeholder


// how to declare a string with backslashes:
var string = "string\\";


// string escape sequences:
// - \' single quote
// - \" double quote
// - \\ backslash
// - \n new line
// - \r carriage return
// - \t tab
// - \b backspace
// - \f form feed
// - \v vertical tab
// - \0 null character

/** Exercise:
 * Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.
 */

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";


// concatinating strings using the + operator:
var string = "string" + "string";

// concatinating strings using the += operator:
var string = "string";
string += "string";


// finding the length of a string:
// to find the length of a string, use the .length property:

// example:
var string = "string";
var length = string.length; // will return 6 as the number of characters making up the string

// using the bracket notation to find the first character in a string:
// to find the first character in a string, use the [0] notation:

// example:
var string = "string";
var character = string[0]; // will return "s" as the first character in the string
