//---------------------------------------
//__proto__
//---------------------------------------

// __proto__ is a property that is attached to every single object in js. it has a lot of useful functions.

// 🔵 bind()
// this is used to carry over functions
const obj1 = {
  name: "obj1",
  num: 23,
  display: function () {
    console.log(`name: ${this.name}, num: ${this.num}`);
  },
};
obj1.display(); // this is a simple function
//name: obj1, num: 23
const obj2 = {
  name: "obj2",
  num: 69,
};
const obj2Disp = obj1.display.bind(obj2);
console.log(obj2Disp); // [Function: bound display] // because here bind returns a reference
obj2Disp(); //name: obj2, num: 69
// ❗ bind() is used to carry over functions if they have same other properties, (in this case name, num)

// 🔵 call() - calls a function with a given 'this' argument

obj1.display.call(obj2);
// name: obj2, num: 69, you can also pass parameters here as well if the function definition has params

// more info on proto functions : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
