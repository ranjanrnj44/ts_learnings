//type "NEVER" - where it is useful
let numOrString = (value: number | string): string => {
  // NOTE : here the :STRING expects all possible cases, num/str/undefined, so make-sure we cover all
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This will never happen");
};
function createError(arg0: string): string {
  throw new Error("Function not implemented.");
}
//
//
// creating a custom type guard
let isNum = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
let numOrStrings = (value: number | string): string => {
  // NOTE : here the :STRING expects all possible cases, num/str/undefined, so make-sure we cover all
  if (typeof value === "string") return "string";
  if (isNum(value)) return "number";
  return createError("This will never happen");
};
