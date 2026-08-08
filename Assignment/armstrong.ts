function isArmstrong(num : number) : boolean{
    let original = num;
    let sum = 0;
    let digits = num.toString().length;

    while(num > 0)
    {
        let digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }

    if(sum == original)
        return true;
    else
        return false;
}

let num = 153;

if(isArmstrong(num))
    console.log(`${num} is Armstrong number`);
else
    console.log(`${num} is not an Armstrong number`);