// ----------------------------------
// rest operator
// ----------------------------------

function add(...params) {
  // we are not sure how many args can come. 👉🏻 REST operator usage
  // here ... params is treated as an array
  let sum = 0;
  for (const param of params) {
    sum += param;
  }
  return sum;
}

console.log(add(2, 3, 5, 3, 23, 52, 352, 3523, 423, 42, 3)); // 4431

//-----------------------------------
// spread operator
//-----------------------------------

function average(a, b) {
  return (a + b) / 2;
}
const arr = [23, 423];
console.log(average(...arr)); // since the data type of arr does not match with the args for average() 👉🏻 we SPREAD the input
//223

// THEREFORE,
// 👉🏻 spread = convert array into individual elements
// 👉🏻 rest = converts individual elements into array

// more on SPREAD: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// more on REST: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
