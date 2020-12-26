// api = Application programming interface
// APIs are used as bridges between various technologies

// you can try any api for this purpose

// I am using cat-facts
// JS by default uses fetch() to handle apis, and it is promised based, so we can have a lot of 'then' cases for +ve response

/*
fetch() 👇🏻
    .then()👇🏻
        .then()👇🏻
            .catch() // this is when there is a failure

// the result from first is carried to next
*/

// nodejs cannot run this, so use the below code on the browser

// 🐱 api more info at : https://alexwohlbruck.github.io/cat-facts/docs/

fetch("https://cat-fact.herokuapp.com/facts")
  .then((res) => {
    console.log("api: ", res);
    return res.json();
  })
  .then((data) => {
    console.log("data: ", data);
    return data;
  })
  .then((catarray) => {
    for (let index = 0; index < catarray.length; index++) {
      var fact = catarray[index]["text"];
      console.log("fact: ", fact);
    }
  });
/*
Promise {<pending>}
api:  Response {type: "cors", url: "https://cat-fact.herokuapp.com/facts", redirected: false, status: 200, ok: true, …}
data:  (5) [{…}, {…}, {…}, {…}, {…}]
 fact:  Cats make about 100 different sounds. Dogs make only about 10.
 fact:  Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.
 fact:  I don't know anything about cats.
 fact:  The technical term for a cat’s hairball is a bezoar.
 fact:  Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.
/*
paste the above code in browser to see it working
*/
// a response object is returned
