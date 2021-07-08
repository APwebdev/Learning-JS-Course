// CREATING ARRAYS


/*

Goals
- Work with Arrays
- Write Object Literals
- Understand Reference Types
- Use common Array/Object methods

*/

/*

Arrays
Ordered collections of values.

- List of comments on IG post
- Collection of levels in a game
- Songs in a playlist

*/

// To make an empty array
let students = [];

// An array of strings 
let colors = ['red', 'orange', 'yellow'];

// An array of numbers
let lottoNums = [19,22,56,12,51]

// A mixed array
let stuff = [true, 68, 'cat', null];


// ARRAY INDICES


// Arrays are indexed!
let colors = ['red', 'orange', 'yellow', 'green'];
colors.length // = 4
colors[0] // = red
colors[1] // = orange
colors[2] // = yellow
colors[3] // = green
colors[4] // = undefined


// MODIFYING ARRAYS


let colors = ['rad', 'orange', 'green', 'yellow'];
colors[0] = 'red';
colors[4] = 'blue'; 
colors[colors.length] = 'indigo'