"use strict";
//converting type to more or less specific
let aVal = "hello"; //more spec
let bVa = aVal; //less specific. Because two is string/number. Here although aVal is string, we changed as string|number
let cVal = aVal; // more specific
//NOTE <> cannot be used in REACT (.jsx) files. It can only used with pure .ts files
let dVal = "Max";
dVal;
let eVal = "Ranjan";
eVal;
//
//
//type assertion - telling out required type
let addOrConcat = (aVals, bVals, c) => {
    if (c === "add")
        return aVals + bVals;
    //else concat
    return "" + aVals + bVals;
};
//
// the below will sure cause err, since addOrConcat's return type is STRING/NUMBER. But, below we want return type as only string. We can overcome it using type assertion
// let myVals: string = addOrConcat(2, 2, 'concat');
let myVals = addOrConcat(2, 2, "concat");
let nextVals = addOrConcat(2, 2, "add");
//
//
// unknown is recommended over any because it provides safer typing — you have to use type assertion or narrow to a specific type if you want to perform operations on unknown
//NOTE we cannot use certain type convert (i.e 10 as string), still it can be force made using type fore casting using 2 as assertion
//10 as string; // ERR, can't use directly
10; // working no err
//
//
// DOM access with assertion
//non null assertion
let img1 = document.querySelector("img");
let img = document.querySelector("img"); // HTMLmageElement - more specific
let myImg = document.querySelector("#myImg"); // Element - less specific
let myImg1 = document.querySelector("#myImg");
img1.src;
img.src;
myImg1.src;
