//--------------------------------
// CALLBACK FUNCTIONS
//--------------------------------
function isOdd(num) {
  return num % 2 != 0;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var arr2 = [1, 3, 5, 7, 9];
var res = arr.every(isOdd); // this is a callback function . notice that we are not passing any value in isOdd as here we are referencing
console.log(res); // false as not every single element is odd in the array
console.log(arr2.every(isOdd)); // true

// writing callbacks
res = arr2.every((e) => {
  return e % 2 != 0;
});
console.log(res); // true
// ❗ if you are not using return, then { } are NOT to be used
res = arr2.every((e) => e % 2 != 0);
console.log(res); //true
