function gcd(a : number, b : number) : number{
    while(b !== 0)
    {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a : number, b : number) : number{
    return (a * b) / gcd(a, b);
}

let num1 = 18;
let num2 = 12;

console.log(`gcd of ${num1} and ${num2} is : `, gcd(num1, num2));
console.log(`lcm of ${num1} and ${num2} is : `, lcm(num1, num2));
