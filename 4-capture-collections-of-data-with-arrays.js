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


// INCLUDES AND INDEXOF


/*

Includes = Look for a value
indexOf = just like str.indexOf

*/

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'butter'
];

ingredients.includes('corn'); // = false
ingredients.includes('water'); // = true
ingredients.includes('water', 3); // = false
ingredients.includes('water', 0); // = true

if(ingredients.includes('flour')) {
    console.log('I am gluten free, I cannot eat that!')
}

ingredients.indexOf('water'); // = 0
ingredients.indexOf('syrup'); // = -1


// REVERSE AND JOIN


/*

Join = Creates a string from arr
Reverse = Reverses an array!

*/

let letters = ['T', 'C', 'E','P', 'S', 'E', 'R'];
letters.reverse() // = R E S P E C T

letters.join(' ') // = "T C E P S E R"

letters.reverse().join('.'); // = "R.E.S.P.E.C.T"


// SLICE


// Copy portion of an arr

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

let swimmers = animals.slice(0, 3); // = ["Shark", "Salmon", "Whale"]
let mammals = animals.slice(2, 4); // = ["Whale", "Bear"]
let reptiles = animals.slice(4); // = ["Lizard", "Tortoise"]
let quadruped = animals.slice(-3); // = ["Bear", "Lizard", "Tortoise"]


// SPLICE


// Remove/Replace elements

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

animals.splice(1, 0, 'octopus'); // = ['shark', 'octopus', 'whale', ...]
animals.splice(3, 2); // deleted whale and bear


// SORTING


// Sorts an array

let people = ['mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];

people.sort(); // = ['Angie', 'Jolene', and so on alphabetical order...]

let nums = [34,10,100000,67,99]

nums.sort(); // = [10, 100000, 34, 67, 99]


// INTRO TO REFERENCE TYPES


let fruit = "orange";
let color = fruit;
fruit = watermelon;
// color still remains orange

let nums = [5,6,7,8];
let otherNums = nums
nums.push(9); // otherNums = 5,6,7,8,9


// USING CONST WITH ARRAYS


// You'll often see people use const with arrays

const myEggs = ['brown', 'brown'];
myEggs.push('white');


// WORKING WITH NESTED ARRAYS


// We can store arrays inside other arrays!

const colors= [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['yellow', 'golden rod'],
    ['green','olive'],
    ['blue', 'navy blue'],
    ['purple', 'orchid']
]

const board = [
    ['0', null, 'X']
    [null, 'X', 'O']
    ['X', '0', null]
]
// Tic tac toe board 