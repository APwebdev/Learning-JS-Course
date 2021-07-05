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