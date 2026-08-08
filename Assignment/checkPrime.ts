function isPrime(num : number) : boolean {
    if(num <= 1)
    {
        return false;
    }
    for(let i = 2; i * i < num; i++)
    {
        if(num % i == 0)
            return false;
    }

    return true;
}

let num = 29;
if(isPrime(num))
{
    console.log(`${num} is prime number`);
}
else{
    console.log(`${num} is not a prime number`);
}