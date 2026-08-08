function isPerfect(num : number) : boolean{
    if(num <= 1)
        return false;

    let sum  = 1;

    for(let i = 2; i * i <= num; i++)
    {
        if(num % i === 0){
            sum += i;

            if(i !== num / i)
            {
                sum += num / i;
            }
        }
    }

    return num === sum;
}

let num : number = 28;

if(isPerfect(num))
{
    console.log(`${num} is perfect number`);
}
else{
    console.log(`${num} is not a perfect number`);
}