//USE :
/*
1. When we need to access object property dynamically
2. On creating obj sometimes, we don't know the exact object properties names (keys)
*/
// interface TransactionObj {
//   pizza: number;
//   Books: number;
//   job: number;
// }

interface TransactionObj {
  //indexing sign - we can also make below as readonly and prevent assigning new value
  readonly [index: string]: number; // keys can be string,symbol,literal types but not BOOLEAN
}

const todaysTransaction: TransactionObj = {
  pizza: -10,
  Books: 15,
  job: 2,
};
console.log(todaysTransaction.pizza);
console.log(todaysTransaction["pizza"]);
//dynamic
let prop: string = "pizza";
console.log(todaysTransaction[prop]); // it should work, but will not. to make use of it we need index signature

let todaysNet = (transactions: TransactionObj): number => {
  let total: number = 0;
  //loop and find the total
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todaysNet(todaysTransaction));
//ERR on trying writing value todaysTransaction.pizza = 39;

//
//
// interface with indexing and object defined - check line 44-47
interface TransactionObj1 {
  //indexing sign - we can also make below as readonly and prevent assigning new value
  readonly [index: string]: number; // keys can be string,symbol,literal types but not BOOLEAN
  pizza: number;
  Books: number;
  job: number;
}

const todaysTransaction1: TransactionObj1 = {
  pizza: -10,
  Books: 15,
  job: 2,
  Ranjan: 21, // TS will not give error since even-though obj mis-match, we're making use of indexing sign
};
console.log(todaysTransaction1.pizza);
console.log(todaysTransaction1["pizza"]);
//dynamic
let prop1: string = "pizza";
console.log(todaysTransaction1[prop]); // it should work, but will not. to make use of it we need index signature

let todaysNet1 = (transactions1: TransactionObj1): number => {
  let total1: number = 0;
  //loop and find the total
  for (const transaction in transactions1) {
    total1 += transactions1[transaction];
  }
  return total1;
};
console.log(todaysNet1(todaysTransaction1));
//ERR on trying writing value todaysTransaction.pizza = 39;
console.log(todaysTransaction1["Ranjan"]);

//
//
// how to achieve obj loop without indexing sign? (KEYOF and Assertion helps us)
interface Student1 {
  //[index: string]: string | number[] | undefined | number; // value should match all the possible values of the obj
  name: string;
  gpa: number;
  classes?: number[];
}
//obj creation
const student: Student1 = {
  name: "Ranjan",
  gpa: 7,
  classes: [88, 66],
};
//console.log(student.test); // being provided index sign, this will give undefined
//loop obj
for (const keys in student) {
  console.log(`${keys} : ${student[keys as keyof Student1]}`); // keyof creates UNION type of OBJECT interface Student1
}
// by using typeof
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]); // other way
});
// for function
const logStudentKey = (student: Student1, key: keyof Student1): void => {
  console.log(`Student : ${key} : ${student[key]}`); // will list
};
logStudentKey(student, "name");
logStudentKey(student, "gpa");

//
//
//  instead of using indexing sign with interface we can use RECORD with TYPES
type Streams = "salary" | "bonus" | "sideHustle";

type Income = Record<Streams, string | number>; // this means inside Streams each salary,bonus,sh can be number|string

const monthlyIncomes: Income = {
  salary: 400,
  bonus: 100,
  sideHustle: 40,
};

for (const rev in monthlyIncomes) {
  // keyof creates UNION type of OBJECT interface Income
  console.log(monthlyIncomes[rev as keyof Income]);
}
