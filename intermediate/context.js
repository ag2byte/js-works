//-----------------------------------
// CONTEXT IN JS
//-----------------------------------

var name = "byte";
if (name === name)
  // strict checking
  console.log("true"); // true

// if (name === window.name) console.log("window true");
// now this statement executes in the browser's inspect but not here as a window is not defined 👉🏻 CONTEXT
// in browser we call the context as window but not in node

//PS: to run this script in node comment the above line

// another example of global context

printName();

function printName() {
  console.log(name);
}

// because of the global context, even if the function is defined after it is called it runs fine

//in execeution context, there are mainly three things: variable object, scope chain, this
// 2 points to remember in  context: Function declarations are scanned and  made available
//                                 : Vairable declarations are scanned and made undefined

// bill(10); // TypeError: bill is not a function
// this is the context problem
// CODE HOISTING:
var bill = (a) => {
  // this is a way of defining a function
  console.log(a + 10);
};
bill(10); // prints 20

console.log(num); // undefined as per rule 2
var num = 23;
console.log(num); // 23
// scope example
function giveNum() {
  var num = 45;
  console.log(num); //45
  giveNumX2();
  function giveNumX2() {
    console.log(num * 2); //90
  }
}
giveNum();
console.log(num); //23

// this keyword 👉🏻 just an intro to it
console.log(this); // {} in node but gives a lot of info in thte browser, again because of context

// more on context: https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Attribute/context
