function isPrime(num : number) : boolean{
    if(num <= 1)
    {
        return false;
    }
    for(let i = 2; i * i < num; i++)
    {
        if(num % i == 0)
        {
            return false;
        }
    }
    return true;
}

function primesInRange(start : number, end : number) : void{
    for(let i = start; i <= end; i++)
    {
        if(isPrime(i))
        {
            console.log(i);
        }
    }
}

let start = 10; 
let end = 50;

primesInRange(start, end);