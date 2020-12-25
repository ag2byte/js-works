// let and var are two vary similar declarations but there is a crazy difference between them
console.log(varname); // nothing is printed and the object here is undefined
var varname = "ag2byte";
/*console.log(letname);
let letname = "ag2byte";*/
// here we do get an error explaining what happened( decomment to see the effect)

if (true) {
  var test = 343;
}
console.log(test); // 343, which should not work coz test is defined in the if scope👉🏻 Pure JS BS

/*if (true) {
  let l_test = 343;
}
console.log(l_test);*/
// ReferenceError: l_test is not defined (decomment to see the effect)
