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
