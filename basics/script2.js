// ---------------------------------
// CONDITIONALS
// ---------------------------------
// if, else , else if ,

const num = Math.round(Math.random() * 1000); // returns a random integer
var message = "";
if (num < 100) message = `${num} < 100`;
else if (num < 500) message = `${num} < 500`;
else if (num < 700) message = `${num} < 700`;
else message = `${num} > 700`;

console.log(message);

// TERNARY OPERATOR

console.log(5 > 3 ? "5" : "3"); // 5
// this is  same as :
// if (5 > 3)
//     console.log("5");
// else
//     console.log("3");

// SWITCH IN JS

const arr = ["user1", "user2", "user3", "user4"];
var element = arr[Math.floor(Math.random() * (4 - 1) + 1 - 1)]; // returns a random element from the arr
switch (element) {
  case "user1":
    console.log("user1 boi");
    break;

  case "user2":
    console.log("user2 hello");
    break;
  case "user3":
    console.log("user3 hi");
    break;

  case "user4":
    console.log("user1 sup");
    break;
  default:
    break;
}

//------------------------------------
// some values commonly used in JS
//------------------------------------

// these are the falsy values
// undefined  - not defined
// null - empty
// 0 - integer
// '' - empty string
// NaN

// here are some bs that js does
console.log(2 + 2); // 4
console.log(2 + "2"); // 22 😶
console.log("2" + "2"); //22
const num1 = "23"; // notice that it is a string here
if (num1 == 23) console.log("23 is a number"); // == is used for loose checking

if (num1 === 23) console.log("23 is absolutely a no.");
// === is used for strict checking
else console.log("23 is a string");
