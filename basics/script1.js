// this is a test file for learning the basics
//using node js for the first time
// console.log("How you doin?");  this is the classic

// --------------------------------
// variables in js
// --------------------------------

// var , let , const  are the mains

// we normally do not have types in js , similar to somwthing in python. For types, a version called typescript can be used

var var1 = "ya man idk why  im typing this";
let num = 3;
// console.log(var1 * num);// returnns NaN, this is not python
console.log(`var1:${var1} and num:${num}`);
// var1:ya man idk why  im typing this and var2:3 // this is called interpolation

console.log(var1, num);
// returns ya man idk why  im typing this 3

const id = 23;
// id = 25 // this is not possible as this is a const data

// taking input from the user ->
//can use alert or prompt but needs a HTML page
// to get the type of variable use typeof

console.log("typeof id:" + typeof id); // typeof id:number

// ---------------------------------------
// OPERATORS
// ---------------------------------------

// this is nothing new, similar to what you do in other languages
const num2 = 4;
console.log(num * num2); //12
// +-/%* ! & == != etc etc...
// MATH library
const num3 = 4.9233232;
console.log(num * num3); //14.7699696
console.log(Math.round(num * num3)); //15

// there are a lot of  math functions that can be used to calculate mathematical expressions. More info at  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// there is also operator precedence which is the same . More info at : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
