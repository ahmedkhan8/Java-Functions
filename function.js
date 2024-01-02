
// function sayMyName() {
//     console.log("A");
//     console.log("H");
//     console.log("M");
//     console.log("E");
//     console.log("D");
// }

// //sayMyName()

// //----------------------------------------------------

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

// addTwoNumbers(8, 2)

// //----------------------------------------------------

// function fullName(fname, lname) {
//     console.log('Hello ' + fname + ' ' + lname);
// }

// fullName('Ahmed', 'Khan');

// //----------------------------------------------------

// function sum(a, b) {      //para
//     add = a + b;
//     return add;
// }
// var bag = sum(3, 2);
// console.log("the sum of two no is " + bag);          //arg


// addition = 10 + bag;
// console.log(addition);

// //----------------------------------------------------

// function functionName() {
//     console.log()
// }                                              //without parameter and arguement

// functionName();

// //----------------------------------------------------

// function functionName(parameter) {
//     console.log()
// }                                                //with parameter and arguement

// functionName(arguement);

// //----------------------------------------------------

// function sum(x, y) {
//     add = x + y;
//     return add;
// }
// var bag = sum(5, 5);

// addition = 10 + bag;
// console.log(addition);

// //-----------------------------------------------

// function minus(x, y) {
//     sub = x - y;
//     return add;
// }

// var bag = minus(15, 5);

// subtraction = 10 - bag;
// console.log(subtraction)


// //------------------------------------

// function multiplied(x, y) {
//     multiply = x * y;
//     return multiply;
// }

// bag = multiplied(4, 3);

// result = 2 * bag;
// console.log(result);

// //----------------------------------------------------

// function add(x, y) {
//     sum = x + y;
//     return add;
// }
// var bag = sum(5, 5);

// result = bag + 10;
// console.log(result);

// //----------------------------------------------------

// function add2numbers(x, y) {
//     sum = x + y;
//     return add;
// }
// var bag = sum(2, 3);

// result = bag + 5;
// console.log(result);

// //----------------------------------------------------

// function multiplied(x, y) {
//     var result = x * y;
//     return result;
// }

// var box = multiplied(1, 5);  // Pass two separate arguments to the multiply function

// var finalResult = box * 10;
// console.log(finalResult);

// //----------------------------------------------------

// function multiplied(x, y) {
//     multi = x * y;
//     return multiplied;
// }
// var bag = multiplied(2, 3);

// result = bag * 5;
// console.log(result);

// //--------------------------------->

// function companyName(fname, lname) {
//     console.log(fname + lname)
//     return fname + lname;
// }
// var name = companyName('RTX ', 'WEB ');

// finalResult = name + 'COM';
// console.log(finalResult);

// //----------------------------------------------------

// function createHelloWorld(word) {
//     console.log(word);
//     return word;
// }
// createHelloWorld("Hello World");

// var createHelloWorld = function () {
//     return function (...args) {

//     }
// };


// function createCounter(n) {
//     let counter = n;
//     return function () {
//         const currentCounterValue = counter
//         counter += 1;
//         return currentCounterValue;
//     };
// }

// --------------------------------------------------

//     let bread1 = prompt("Which bread would you like?");
// let veggies1 = prompt("Your favorite veggies?");
// let sauce1 = prompt("Which sauce would you like?");

// function makeSandwich(bread, veggies, sauce) {
//     let sandwich = bread + " bread " + veggies + " " + sauce + " sandwich";
//     return sandwich;
// }

// let vegSandwich = makeSandwich(bread1, veggies1, sauce1);
// console.log(vegSandwich);

function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make)