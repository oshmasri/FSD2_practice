function decimalToBinary(num: number): string {
    if (num === 0) {
        return "0";
    }

    let binary = "";

    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }

    return binary;
}

// Example
let number = 25;

console.log("Binary =", decimalToBinary(number));