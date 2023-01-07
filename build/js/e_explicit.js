"use strict";
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
//incorrect
// greet("Ranjan", Date());  // date need to be called with new keyword
//correct
greet("Ranjan", new Date());
