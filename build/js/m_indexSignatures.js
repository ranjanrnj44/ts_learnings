"use strict";
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
const todaysTransaction = {
    pizza: -10,
    Books: 15,
    job: 2,
};
console.log(todaysTransaction.pizza);
console.log(todaysTransaction["pizza"]);
//dynamic
let prop = "pizza";
console.log(todaysTransaction[prop]); // it should work, but will not. to make use of it we need index signature
let todaysNet = (transactions) => {
    let total = 0;
    //loop and find the total
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
const todaysTransaction1 = {
    pizza: -10,
    Books: 15,
    job: 2,
    Ranjan: 21, // TS will not give error since even-though obj mis-match, we're making use of indexing sign
};
console.log(todaysTransaction1.pizza);
console.log(todaysTransaction1["pizza"]);
//dynamic
let prop1 = "pizza";
console.log(todaysTransaction1[prop]); // it should work, but will not. to make use of it we need index signature
let todaysNet1 = (transactions1) => {
    let total1 = 0;
    //loop and find the total
    for (const transaction in transactions1) {
        total1 += transactions1[transaction];
    }
    return total1;
};
console.log(todaysNet1(todaysTransaction1));
//ERR on trying writing value todaysTransaction.pizza = 39;
console.log(todaysTransaction1["Ranjan"]);
//obj creation
const student = {
    name: "Ranjan",
    gpa: 7,
    classes: [88, 66],
};
//console.log(student.test); // being provided index sign, this will give undefined
//loop obj
for (const keys in student) {
    console.log(`${keys} : ${student[keys]}`); // keyof creates UNION type of OBJECT interface Student1
}
// by using typeof
Object.keys(student).map((key) => {
    console.log(student[key]); // other way
});
// for function
const logStudentKey = (student, key) => {
    console.log(`Student : ${key} : ${student[key]}`); // will list
};
logStudentKey(student, "name");
logStudentKey(student, "gpa");
const monthlyIncomes = {
    salary: 400,
    bonus: 100,
    sideHustle: 40,
};
for (const rev in monthlyIncomes) {
    // keyof creates UNION type of OBJECT interface Income
    console.log(monthlyIncomes[rev]);
}
