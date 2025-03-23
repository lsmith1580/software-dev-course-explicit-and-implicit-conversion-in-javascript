/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // Turns "5" into a number
console.log("The result is: " + result);

let isValid = Boolean(false); // Changes boolean to be correctly false
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25"); // Turns the value of "25" to a number to be correctly added to 5
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

let answer = "My age is: " + 27 // Implicit type conversion
console.log(answer); 

let isCloudy = Boolean(null); // Explicit type conversion
if (isCloudy) {
    console.log("It's cloudy!");
}
