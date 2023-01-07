"use strict";
//very useful and seen mostly
/*
What is generics?
1.Best use for utility functions
2.sometimes we don't know what types to be get passed in func,types, ...etc
so, Here this problems can be addressed via GENERICS
*/
const stringEcho = (arg) => arg; //for now it is only string
//from above scenario, what if we need more elegant way, kind of abstracting type?, use GENERICS
const stringEcho1 = (arg) => arg;
stringEcho1(1); //can be num
stringEcho1("One"); //can be string as well
//
//
// check vals , below return type expects boolean
const isObj = (args) => {
    return typeof args === "object" && !Array.isArray(args) && args !== null;
};
console.log(isObj(true)); //false
console.log(isObj([1, 2, 3])); //false
console.log(isObj("true")); //false
console.log(isObj({ name: "Ranjan" })); //true
console.log(isObj(null)); // false
