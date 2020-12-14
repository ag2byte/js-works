//--------------------------------
// for loops
//--------------------------------
var arr = [12, 243, 523, 2, 5322, 234];
for (let index = 0; index < arr.length; index++)
  console.log(arr[index] % 2 === 0 ? "even" : "false");
//this is a basic example of for loop

//working with continue and break
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (element % 2 != 0) continue; // if odd go back to loop condition
  if (index > 4) break; // if index > 4 exit loop
  console.log(element);
  //12
  //2
  //5322
}

//---------------------------------------
// while loops
//---------------------------------------
let i = 0;
while (i < 10) {
  console.log(i++);
} // basix implementation

//--------------------------------------
// do while loop
//--------------------------------------
// this is an exit controlled loop i.e condition is checked at last
let p = 5;
do {
  console.log(p--);
} while (p < 4); // 5
// notice that the above loop is executed atleast once

//--------------------------------------
//foreach loop
//--------------------------------------
// this is not exactly a loop but rather a function for array
console.log("for each=>");
arr.forEach((e) => console.log(e)); // prints the entire array.. e is the element

// there are other loops as weel for off and for in
console.log("for of =>");
for (const n of arr) console.log(n);
//for of is mainly used with arrays
var obj = {
  name: "byte",
  age: 22,
  sex: "male",
};
console.log("for in =>");
for (const i in obj) console.log(`${i} : ${obj[i]}`);
/*
name : byte
age : 22
sex : male
*/

// more details on loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
