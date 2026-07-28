let value: any;

value = 10;
console.log("Any Number:", value);

value = "Hello";
console.log("Any String:", value);

value = true;
console.log("Any Boolean:", value);



let data: unknown = "TypeScript";
data = 100;
console.log(data);

console.log("Unknown String:", data);


function greet(): void {
    console.log("Welcome to TypeScript!");
}

greet();