"use strict";
let value;
value = 10;
console.log("Any Number:", value);
value = "Hello";
console.log("Any String:", value);
value = true;
console.log("Any Boolean:", value);
let data = "TypeScript";
if (typeof data === "string") {
    console.log("Unknown String:", data.toUpperCase());
}
function greet() {
    console.log("Welcome to TypeScript!");
}
greet();
