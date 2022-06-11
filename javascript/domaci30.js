strs=["flower","flow","flight"];

zajednickiPocetak="";
slovo="";
zavrsiProgram=false;
//pozicija slova:
for(i=0;i<strs[0].length;i++)
{
    slovo="";
    for(j=0;j<strs.length-1;j++)
    {
        if(strs[j][i]===strs[j+1][i])
        {
            slovo=strs[j][i];
        }
        else{
            zavrsiProgram=true;
            break;
        }
    }
    if(zavrsiProgram) break;
    zajednickiPocetak+=slovo;
}
console.log(zajednickiPocetak);