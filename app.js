console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
var a = 20;
var b = 4;
var add = (a + b);
var minus = a - b;
var multiply = a * b;
var dividing = a / b;

console.log(`a = ${a}, \nb = ${b}, \nadd = ${add}, \nminus = ${minus}, \nmultiply = ${multiply}, \ndividing = ${dividing}`)

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let num = 11;
let str1 = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

/*
Results Expected:

num + str1 = 22
num + str2 = 11eleven
num + isPresent = Error or 12 (?)
firstName + num = Frodo11
isPresent + str1 = Error or true11
firstName + space + lastName = Frodo Baggins

>The lack of a space really bugged me.
*/

console.log(`num + str1 = ${num + str1} \nnum + str2 = ${num + str2} \nnum + isPresent = ${num + isPresent} \nfirstName + num = ${firstName + num} \nisPresent + str1 = ${isPresent + str1} \nfirstName + space + lastName = ${firstName + " " + lastName}`)

/*
Console Results:

num + str1 = 1111 
num + str2 = 11eleven 
num + isPresent = 12 
firstName + num = Frodo11 
isPresent + str1 = true11 
firstName + space + lastName = Frodo Baggins

>I'm sad I got the first one wrong!
*/

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

/*
Results Expected:

val == str3: true
val === str3: false
!isAwake: true
("eleven" == str4 && val >= str3): false
(!isAwake || isAwake): true
0 == false: true
0 === false: false
0 != false: false
0 !== false: true
*/

console.log(`val == str3: ${val == str3} \nval === str3: ${val === str3} \n!isAwake: ${!isAwake} \n("eleven" == str4 && val >= str3): ${("eleven" == str4 && val >= str3)} \n(!isAwake || isAwake): ${(!isAwake || isAwake)} \n0 == false: ${0 == false} \n0 === false: ${0 === false} \n0 != false: ${0 != false} \n0 !== false: ${0 !== false}`)

/*
Console Results:

val == str3: true 
val === str3: false 
!isAwake: true 
("eleven" == str4 && val >= str3): false 
(!isAwake || isAwake): true 
0 == false: true 
0 === false: false 
0 != false: false 
0 !== false: true

I did good :)
*/