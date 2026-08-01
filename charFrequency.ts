function countFrequency(str : string) : void{
    const freq = new Map<String, number>();

    for(const ch of str)
    {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    for(const [ch, count] of freq)
    {
        console.log(`${ch} : ${count}`);
    }
}

//Example
let str = "program";
countFrequency(str);