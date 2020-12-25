// this is probably the most interesting part of JavaScript, and why it makes the language so popular
// all these are related to the performance of the web app
// it takes a time to fetch data from stuff like database and it will be bad if users had to wait

/*
            PROMISES
        👈🏻           👉🏻
      👇🏻                👇🏻
      fulfilled        not fulfilled
        */

const work = () => {
  return new Promise((resolve, reject) => {
    //resolve and reject are 2 functions
    setTimeout(() => {
      // .... resolved code
      resolve("issue resolved"); // we can place anyother data type here
    }, 3500);
    console.log("work function");
  }); // either resolved or rejected
};

const power = () => {
  console.log("this is a normal function");
};

const energy = async () => {
  await work(); // await means wait for this function to complete entirely
  power();
};

energy();

// this is very similar to try and catch statements imo
// more on : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
//          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
