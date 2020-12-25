//--------------------------------------
//FUNCTIONS
//--------------------------------------
function func1() {
  console.log("this is the function"); // this is the function
  return 3;
}

console.log(func1()); // 3 // this is calling a function
console.log(func1); // [Function: func1] // this is referencing a function

// using parameters
function func2(name) {
  console.log(`Hello ${name}`); // Hello ag2byte
}
func2("ag2byte");

// functions can also be assigned to variables

var user = function getuser() {
  const arr = ["user1", "user2", "user3", "user4"];
  var element = arr[Math.floor(Math.random() * (4 - 1) + 1 - 1)]; // returns a random element from the arr
  return element;
};
console.log(user); // [Function: getuser] // thus this is just a variable for holding the function
console.log(getuser()); /// now this becomes undefined
