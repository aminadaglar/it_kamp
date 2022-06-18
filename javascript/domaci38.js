function posebni(recenica)
{
    recenica2=[];
    for(i=0;i<recenica.length;i++)
    {
        if(!recenica2.includes(recenica[i]))
        {
            recenica2.push(recenica[i]);
            
        }
    }
    return recenica2.join("");
}

recenica="the quick brown fox jumps over the lazy dog";

console.log(posebni(recenica));
