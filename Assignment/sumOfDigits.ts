function sumOfDigits(num : number) : number{
    let sum = 0;
    for(let i = 1; i <= num; i++)
    {
        sum += i;
    }

    return sum;
}

let num = 12;
console.log(sumOfDigits(num));