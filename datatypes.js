"use strict";
let student_name = "Radha";
let marks = 97;
let grade = false;
if (marks > 35) {
    grade = true;
}
console.log("Data type of student name is : " + typeof student_name);
console.log("Data type of marks is : " + typeof marks);
console.log("Data type of grade is : " + typeof grade);
function displayResults(name, marks, garde) {
    console.log(`Student name: ${student_name}`);
    console.log(`Marks: ${marks}`);
    console.log(`Result: ${grade ? "Pass" : "Fail"}`);
}
displayResults(student_name, marks, grade);
