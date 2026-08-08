//sum of numbers using rest parameters
function calculateMarks(...marks : number[]) : number
{
    return marks.reduce((total, current) => total + current, 0);
}

//student details using default parameters and optional parameters
function details(Sname : string, grade : string, college : string = "SVECW", section? : string) : void
{
    console.log(`${Sname} has ${grade} grade whose studying in ${college}`);
    if(section)
    {
        console.log(`${Sname} from ${section} section`);
    }
}
let g : string;
const score = calculateMarks(70, 50, 90, 80, 98);
    if(score < 300)
    {
        g = "F";
    }
    else if(score >= 300 && score < 400)
    {
        g = "A";
    }
    else{
        g = "S";
    }

details("Tara", g);





