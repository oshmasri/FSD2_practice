"use strict";
//Arrow function using map builtin array method.
let salary = [100, 200, 700, 900, 500];
let double_salary = salary.map(num => num * 2);
console.log(double_salary);
//reduce built-in array method.
let total_salary = salary.reduce((current, total) => current + total, 0);
console.log(total_salary);
