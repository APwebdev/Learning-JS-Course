// BOOLEAN 


// Booleans are simple True or False values (Yes or No). (1 or 0)
let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;

// Variables can change type
let numDonuts = 12; // It's a Number
numDonuts = false; // now i'ts a Boolean!
numDonuts = 12987346; // back to number!
// You probably wouldn't change a number to a Boolean, but you can!


// STRINGS


// Strings in Javascript are pieces of text, or strings of characters. (We wrap them in quotes!)

//Whether you use single or double quotes, just make sure you are consistent!
let fistName = "Ziggy";
let lasName = "Canaryface";
let msg = "Please don't feed the chimps"
let animal = 'Dumbo Octopus'
let something = 'he said "Make me do it!" '
firstName + lastName; // = ZiggyCanaryface
firstName + " " + lasName; // = Ziggy Canaryface


// STRING INDICES


// Strings are indexed. Each character has a corresponding index (a potential number)
let mySong = "Surfin ' USA"
mySong.length // = 11
mySong[0] // = S

let gibberish = '1j2ekqwnwkeejwjkdw'
gibberish[giberrish.length - 1] // = w


// STRING METHODS


// String come with a set of built-in methods, which are ACTIONS that can be performed on or with that particular string.
// We can do (Searching within a string), (Replacing parts of a string), (Changing case, upper/lowercase)

// Changing Case

let yellMsg = 'I am king';
let yellMsg = msg.toUpperCase(); // = I AM KING
let angry = "LeaVe mE AlOnE!";
angry.toLowerCase(); // = leave me alone
// The value in angry is unchanged!

// Trim

let color = "          purple                  ";
color.trim() // = "purple"
color.trim().toUpperCase() // = "PURPLE"
// Only removes the leading and trailing spaces while keeping other spaces intact.


// MORE STRING METHODS


// Some methods accept arguments that modify their behavior. We pass these arguments inside of the parentheses.
let tvShow = "catdog";

tvShow.indexOf("cat") // = 0
tvShow.indexOf("dog") // = 3
tvShow.indexOf("z") // = -1 (not found)

// Slice
let str = "baseball"

str.slice(4); // = ball
str.slice(0.5); // = baseb

// Replace
let annoyingLaugh = "teehee so funny! teehee!";

annoyingLaugh.replace("teehee", "haha"); // = haha so funny! teehee!  NOTICE that it only replaces the first instance!


// STRING QUIZ


// What is the value of age?
const age = "5" + "4"; // = 54

// What does this evaluate to?
"pecan pie" [7]; // = i
"PUP" [3]; // = Undefined (ERROR)

// What is the value of song?
let song = "london calling";
song.toUpperCase(); // = london calling (song is unaltered, and not being stored so it remains the same)

// What is the value of cleanedInput?
let userInput = "   TODD@gmail.com";
let cleanedInput = userInput.trim().toLowerCase(); // = "todd@gmail.com"

// What is the value of index?
let park = "Yellowstone";
const index = park.indexOf("Stone"); // = -1 (not found)

let yell = "GO AWAY!!";
let index = yell.indexOf("!"); // = 7

// What does this evaluate to?
"GARBAGE".slice(2).replace("B", ""); // = RAGE!


// STRING ESCAPES


// \n - newline
// \' - single quote
// \" - double quote
// \\ - backslash

"he said I ain\'t happy" // = he said I ain't Happy
"Hello\nGoodbye" // = Hello (newline) Goodbye
"\\" // = \ 


// STRING TEMPLATE LITERALS


// Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.

`I counted ${3 + 4 } sheep`; // = I counted 7 sheep
// We use BACK-TICKS not SINGLE QUOTES!!! ' = `

let username = 'Ziggy31';
`Welcome back, ${username}`; // = Welcome back, Ziggy31

`GAME OVER ${username.toUpperCase()}`; // = GAME OVER ZIGGY31

let item = 'cucumbers';
let price = 1.99;
let quantity = 4;

`You bought ${quantity} ${item}, total price: $${price * quantity}`;
// = You bought 4 cucumbers, total price: $7.96

const minAge = 21;
let yourAge = 19;

`You must be ${minAge} to enter. Come back in ${minAge - yourAge} years!`
// = You must be 21 to enter. Come back in 2 years!


// NULL & UNDIFINED


// Null
// "Intentional absence of any value", Must be assigned

// No one is logged in yet...
let loggedInUser = null; // value is explicitly nothing
// A user logs in...
loggedInUser = 'Alan Rickman';

//Undefined
// Variables that do not have an assigned value are undefined

"lol"[4]; // = Undefined
const u = underfined; // = Undefined
let color; // Undefined


// MATH OBJECT
// Contains properties and methods for mathematical constants and functions

Math.PI // 3.141592653589793

// Rounding a number:
Math.round(4.9); // = 5

// Absolute value:
Math.abs(-456); // = 456

// Raises 2 to the 5th power:
Math.pow(2,5); // = 32

// Removes decimal:
Math.floor(3.9999); // = 3

// Random Numbers
// Math.random() gives us a random decimal between 0 and 1 (non-inclusive)

Math.random(); // = 0.13441231239523
Math.random(); // = 0.1238143792845
Math.random(); // = 0.5820340212334

// Random Integers
// Let's generate random numbers between 1 and 10

const step1 = Math.random();
// = 0.5961104892819127
const step2 = step1 * 10
// = 5.961104892810127
const step3 = math.floor(step2);
// = 5
const step4 = step3 + 1;
// = 6

Math.floor(Math.random() * 10) + 1;


// TYPEOF OPERATOR

typeof 'hello'; // = String
typeof 2; // = Number
typeof true; // = Boolean


// PARSEINT & PARSEFLOAT
// Use to parse strings into numbers, but watch out for NaN!

parseInt('24'); // = 24
parseInt('24.987'); // = 24
parseInt('28dayslater') // = 28

parseFloat('24.987'); // = 24.987
parseFloat('7'); // = 7
parseFloat('I ate 3 shrimps'); // = NaN