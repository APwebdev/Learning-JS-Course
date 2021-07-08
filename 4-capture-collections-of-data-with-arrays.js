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


// PUSH AND POP


/*

Array Methods

- Push : add to the end
- Pop : remove from the end
- Shift : remove from the start
- Unshift : add to start

You migh mix up shift and unshift for a while!

*/

let topSongs = [
    'First Time I Ever Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];
topSongs.push('Fortunate Son')
topSongs.push(true)
const nextSong = topSongs.pop()


// SHIFT AND UNSHIFT


let dishesToDO = ['big platter']
dishedToDo.unshift('large plate')
dishedToDo.unshift('small plate')
dishedToDo.unshift('cereal bowl')
dishedToDo.unshift('mug')
dishedToDo.unshift('dirty spoon')
dishesToDO.shift()
dishesToDO.shift()
dishesToDO.shift()
dishesToDO.shift()


// CONCAT

// Merge Arrays

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

let allFood = fruits.concat(veggies, meats); // = They merge into one Array!