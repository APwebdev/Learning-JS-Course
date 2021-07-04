// Numbers

3 + 4
1.5 + 8
12 - 4.567
4 * 1.3
4 / 2 
25 % 3 
2 ** 3 // 2 * 2 * 2
3 - 9 * 2 // Will do multiplication first! Parentesis can be used to modify that.

// NaN & Infinity

0 / 0 // = NaN
1 + NaN // = NaN
1 / 0 // = Infinity
- 1 / 0 // = -Infinity
// 0 and -0 also exists in Javascript!

// Numbers Quiz

1.5 + 1.5 * 2 // = 4.5.
(10 % 6) ** 2 // = 16
200 + 0 / 0 // = NaN

// Variables & Let

let someName = value // Basic Syntax

let hens = 4;
let roosters = 2;
hens + roosters // = 6

let hens = 4;
// A racoon killed a hen.
hens - 1; // = 3
hens; // Still 4!
// To actually change hens:
hens = hens - 1;
hens // = 3
// Always use camelcase (camelCase)

// Unary Operators

let score = 0;
score = score + 10;
score += 10; // Cleaner code!
let = bonusMult = 3;
score *= bonusMult // In english: Take score and multiply it by 3. And then save new value to score

let counter = 0;
counter++; //Adds 1, so the counter is now 1!
counter--; //Subtracts the 1, and we're back to 0!

// Introducing Const

const hens = 4;
hens = 20; // ERROR!

const age = 17;
age = age + 1; // ERROR!

// const works just like let except you CANNOT change the value!

// Why use const? Once we cover Arrays and Objects, we'll see other situations where const makes sense over let.
const pi = 3.14159;

const daysInWeek = 7;

const minHeighForRide = 60;

// Essentially gives the variable a label.

// The Legacy of Var

var tripDistance = 7.4;
// Before let & const, var was the only way of declaring variables.

// Priorotise using let and const becuase of browser compatibility!


// Variable Quiz

let eggCount = 42;
eggCount + 2; // = 42

const rating = 7.5;
rating = 8; // = ERROR

let wind_speed = 76;
wind_speed += 5;
wind_speed--; // = 80 (use camelCase)!!!