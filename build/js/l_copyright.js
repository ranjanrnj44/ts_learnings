"use strict";
// // Original JS code - re-write and remove errors
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// 1st variation : - AS BEGINNER
let year;
year = document.getElementById("year");
let thisYear;
thisYear = new Date().getFullYear().toString();
// adding type guard and telling to TS
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
// 2nd variation - TYPE ASSERTION
const years = document.getElementById("year");
const thisYears = new Date().getFullYear().toString();
// adding type guard and telling to TS
years.setAttribute("datetime", thisYear);
years.textContent = thisYear;
