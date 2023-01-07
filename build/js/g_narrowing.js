"use strict";
//NOTE : Ts evaluates your code at compilation to deduct the type changes
//NOTE : Checking against the value returned by typeof is a type guard
//narrowing
function getWidth(width) {
    if (typeof width === "number") {
        console.log(`Width is in px : ${width}px`); // here width is number
        return `Width is in px : ${width}px`;
    }
    //if width, it prints else it gives default value "auto"
    return width ? width : "auto"; //soln to overcome the undefined
}
typeof getWidth(); //undefined cause we used ?: optional chaining
typeof getWidth(50); //number 50px
typeof getWidth("100%"); // string '100%'
typeof getWidth("auto"); // string 'auto'
//narrowing SWITCH
function getWidths(width) {
    switch (typeof width) {
        case "number":
            return `${width}px`;
        case "string":
            return width;
        default:
            return "auto";
    }
}
typeof getWidths(); //undefined cause we used ?: optional chaining
typeof getWidths(50); //number 50px
typeof getWidths("100%"); // string '100%'
typeof getWidths("auto"); // string 'auto'
//
//
//
// typeof in instance to get array methods
function play(files) {
    // to narrowDown and make use of actual type, try using instanceof operator
    if (files instanceof Array) {
        files.map((i) => console.log(i));
    }
}
//
//
//NOTE : Checking against the value returned by typeof is a type guard
// different types of type guards
typeof Array; //function
typeof String; //string
typeof Symbol; //function
typeof function () { }; //function
typeof Object; //function
typeof null; //obj
typeof []; //obj
typeof {}; //object
//
//
//
//how to use instanceof to check between array/number
function count(values) {
    //by using instanceof we are checking it's prototype (self, parent, root)
    if (values instanceof Array) {
        // array
        return values.reduce((prev, curr) => prev + curr, 0);
    }
    return values; //number
}
//
//
// truthiness
//here all are falsy value and apart from this all other values are TRUE
Boolean(0);
Boolean(-0);
//Boolean(0n);
Boolean(NaN);
Boolean(undefined);
Boolean(null);
Boolean(false);
Boolean("");
//true  values
Boolean(true);
Boolean("false");
Boolean({});
Boolean([]);
Boolean(() => { });
Boolean(42);
Boolean(-42);
//Boolean(12n);
Boolean(3.14);
Boolean(-3.14);
Boolean("0");
Boolean(Infinity);
Boolean(-Infinity);
Boolean(new Date());
function playFile(file) {
    //use in operator to check
    if ("play" in file) {
        return file.play();
    }
    return file.filename;
}
//
//
// type predict - building own type guard
//
//
//callback function in ts
function one(s) {
    console.log(s);
}
function greets(oneFunc) {
    console.log("ss");
}
greets(one);
