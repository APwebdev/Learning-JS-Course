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