//NOTE : Ts evaluates your code at compilation to deduct the type changes
//NOTE : Checking against the value returned by typeof is a type guard
//narrowing
function getWidth(width?: string | number): string {
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
function getWidths(width?: string | number): string {
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

function play(files: unknown) {
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
typeof function () {}; //function
typeof Object; //function
typeof null; //obj
typeof []; //obj
typeof {}; //object
//
//
//
//how to use instanceof to check between array/number
function count(values: number | Array<number>): number {
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
Boolean(() => {});
Boolean(42);
Boolean(-42);
//Boolean(12n);
Boolean(3.14);
Boolean(-3.14);
Boolean("0");
Boolean(Infinity);
Boolean(-Infinity);
Boolean(new Date());
//
//
//
// truthiness ternary operator (true ? true : false)
//
//
// truthiness || operator (if either 1 is true then TRUE else FALSE)
//
//
// truthiness && operator (both should be TRUE so the result is true else FALSE)
//
//
// truthiness comparison value (==, ===) (Always use ===, in TS == is not more recommended)
/* comparing 2 obj is always FALSE
   comparing NaN == NaN  / NaN === NaN both are FALSE
   Object.is(NaN,NaN) is TRUE */
//
//
// type coercion
//
//
// type in operator
interface Play1 {
  filename: string;
  play: () => string;
  plays(): string;
}
interface UnPlay1 {
  filename: string;
}
function playFile(file: Play1 | UnPlay1) {
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
function one(s: string) {
  console.log(s);
}

function greets(oneFunc: (s: string) => void) {
  console.log("ss");
}

greets(one);
