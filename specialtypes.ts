let value: any;

value = 10;
console.log("Any Number:", value);

value = "Hello";
console.log("Any String:", value);

value = true;
console.log("Any Boolean:", value);



let data: unknown = "TypeScript";


if (typeof data === "string") {
    console.log("Unknown String:", data.toUpperCase());
}

function greet(): void {
    console.log("Welcome to TypeScript!");
}

greet();