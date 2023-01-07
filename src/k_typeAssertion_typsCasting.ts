// Type Assertion is converting type to more or less specific
type One = string;
type Two = string | number;
type Three = "hello";

//converting type to more or less specific
let aVal: One = "hello"; //more spec
let bVa = aVal as Two; //less specific. Because two is string/number. Here although aVal is string, we changed as string|number
let cVal = aVal as Three; // more specific

//NOTE <> cannot be used in REACT (.jsx) files. It can only used with pure .ts files
let dVal = <One>"Max";
dVal;
let eVal = <string | number>"Ranjan";
eVal;

//
//
//type assertion - telling out required type
let addOrConcat = (
  aVals: number,
  bVals: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return aVals + bVals;
  //else concat
  return "" + aVals + bVals;
};

//
// the below will sure cause err, since addOrConcat's return type is STRING/NUMBER. But, below we want return type as only string. We can overcome it using type assertion
// let myVals: string = addOrConcat(2, 2, 'concat');
let myVals: string = addOrConcat(2, 2, "concat") as string;
let nextVals: number = addOrConcat(2, 2, "add") as number;

//
//
// unknown is recommended over any because it provides safer typing — you have to use type assertion or narrow to a specific type if you want to perform operations on unknown
//NOTE we cannot use certain type convert (i.e 10 as string), still it can be force made using type fore casting using 2 as assertion
//10 as string; // ERR, can't use directly
10 as unknown as string; // working no err

//
//
// DOM access with assertion
//non null assertion
let img1 = document.querySelector("img")!;
let img = document.querySelector("img") as HTMLImageElement; // HTMLmageElement - more specific
let myImg = document.querySelector("#myImg") as HTMLElement; // Element - less specific
let myImg1 = document.querySelector("#myImg") as HTMLImageElement;

img1.src;
img.src;
myImg1.src;
