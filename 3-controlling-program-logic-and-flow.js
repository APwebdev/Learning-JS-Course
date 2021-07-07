//  MAKING DECISIONS in JS


// Goals: Understand comparison operators, Write conditionals, Work with boolean operators


// COMPARISON OPERATORS

/*

> = Greater than
< = Less than
>= = Greater than or equal to
<= = Less than or equal to
== = Equality
!= = Not equal
=== = Strict equality
!== = Strict non-equailty

*/

-2 > 1; // = false
10 < 999; // = true
2 >= 2; // = true
2 >= 5; // = false
2 >= 1; // = true
55.1 <= 55.5; // = true

// Notice these all return a Boolean!

"hello".length >= "hello!".length; // false
'a' < 'A'; // false
'#' < '$'; // true


// DOUBLE EQUALS (==)


/*

Checks for equality of value, but not equailty of type.
It coerces both values to the same type and then compares them.
This can lead to some unexpected results

*/

 5 == 5; // = true
 'b' == 'c'; // = false
 0 == ''; // = true
 true == false; // = false
 0 == false; // = true
 null == undefined; // = true


 // TRIPLE EQUALS


 // Checks for equality of value AND type
 5 === 5; // = true
 1 === 2; // = false
 2 === '2' // = false
 false === 0; // = false

 // Same applies for != and !==
 10 != '10'; // = false
 10 !== '10'; // = true


 // RUNNING CODE FROM A SCRIPT


 /*

Include your script in a .html file, by using <script> and the src attribute.
Then write your code in a .js file!

 */

// console.log() prints arguments to the console (we need this if we're going to start working with files!)


// IF STATEMENTS


// if

let rating = 3;
if (rating === 3) {
    console.log("You are a superstar!");
}

let num = 37;
if(num % 2 !==0) {
    console.log('Odd Number');
}


// ELSE IF


// If not the first thing, maybe this other thing??
// You can have multiple else ifs!

/*

Performance Review
3 - Superstar
2 - Meets expectations
1 - Needs improvements

*/

let rating = 2;

if (rating === 3) {
    console.log("You're a superstar!");
}
else if (rating === 2) {
    console.log ("Meets expectationms");
}
else if (rating === 1) {
    console.log("Needs improvement");
}


// ELSE


// If nothing else was true, do this!

let rating = -99;

if (rating === 3) {
    console.log("You're a superstar!");
}
else if (rating === 2) {
    console.log ("Meets expectations");
}
else if (rating === 1) {
    console.log("Needs improvement");
}
else {
    console.log ("Invalid Rating!");
}

// Example 2

let highScore = 1430;
let userScore = 1200;

if(userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`)
}


// NESTING CONDITIONALS


// We can nest conditionals inside conditionals

let password = 'cat dog';
if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("Password cannot include spaces");
    }
    else {
        console.log ("Valid password!");
    }
}
else {
    console.log("Password is too short!");
}


// TRUTHY & FALSY VALUES


/*

All values have an inherent truthy or falsy boolean value

Falsy values:
- false
- 0
- "" (empty string)
- null
- undefined
- NaN

Everything else is truthy!

*/


// LOGICAL AND (&&)


// Both sides must be true in order for the whole thing to be true!

1 <= 4 && 'a' === 'a'; // = true
9 > 10 && 9 >= 9; // = false
'abc'.length === 3 && 1+1 === 4; // = false

// Example 2

let password = 'chickenGal';

if(password.length >= 8 && password.indexOf(' ') === -1) {
    console.log("Valid Password!");
}
else {
    console.log("Invalid Password!");
}

// Example 3

let num = 3;
if(num >= 1 && num <= 10) {
    console.log("Number is between 1 and 10");
}
else {
    console.log('Please guess a number between 1 and 10');
}


// OR

// If one side is true, the whole thing is true

1 !== 1 || 10 === 10 // = true
10/2 === 5 || null // = true
0 || undefined // = false

// Example 2

let age = 76
if(age < 6 || age >= 65) {
    console.log('You get in for free!');
} else {
    console.log('That will be $10 please.')
}


// NOT operator (!)


// !expression returns true if the expression is false!
!null // = true
!(0 === 0) // = false
!(3 <= 4) // = false

// Example 2

let loggedInUser;
if(!loggedInUser) {
    console.log('Get out of here!')
}

// Example 3

let flavor = "grape";
if(flavor !== 'grape' && flavor !== 'cherry') {
    console.log("We only have grape and cherry!");
}


// OPERATOR PRECEDENCE


// Not (!) has a higher precedence than && and ||. && has higher precedence than ||
// You can alter this using parens ()

let x = 7;
x == 7 || (x === 3 && x > 10); // = true
(x == 7 || x === 3) && x > 10; // = false


// THE SWITCH STATEMENT


let day = 3;
if( day === 1) {
    console.log("Monday")
} else if(day === 2) {
    console.log("Tuesday");
} else if(day === 3) {
    console.log("Wednesday");
} else if(day === 4) {
    console.log("Thursday");
} else if(day === 5) {
    console.log("Friday");
} else if(day === 6) {
    console.log("Saturday");
} else if(day === 7) {
    console.log("Sunday");
} else {
    console.log('Invalid day!')
}

// Easier way to do "Example 1"

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log('Invalid day!');
}