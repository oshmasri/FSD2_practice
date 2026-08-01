function removeDuplicates(str : string) : string{
    const seen = new Set<string>();
    let res = "";

    for(const ch of str)
    {
        if(!seen.has(ch))
        {
            seen.add(ch);
            res += ch;
        }
    }

    return res;
}

let str = "Success";
console.log(removeDuplicates(str));