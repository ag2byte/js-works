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
