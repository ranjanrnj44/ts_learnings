//instead of repeating our code for n times we can make use of types
//repeated
let add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(1, 2));

function sub(x: number, y: number): number {
  return x - y;
}
console.log(9 - 3);

//creating a reusable "TYPE" - No default values can be used in TYPES
type mathCalcType = (a: number, b: number) => number;

let mul: mathCalcType = (p, q) => p * q;
mul(1, 6);

let div: mathCalcType = (d, f) => d / f;
div(4, 2);

//creating a reusable "INTERFACE"  - No default values can be used in INTERFACE
interface mathCalcInterface {
  (a: number, b: number): number;
}

let multiply: mathCalcInterface = (p, q) => p * q;
mul(1, 6);

let divide: mathCalcInterface = (d, f) => d / f;
div(4, 2);
