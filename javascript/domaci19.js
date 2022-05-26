niz=[5,4,1,6];
parni=0;
neparni=0;
for(i=0;i<niz.length;i++)
{
    if(niz[i]%2===0)
    {
        parni+=niz[i];
    }
    else
    {
        neparni+=niz[i];
    }
}
console.log("razlika neparnih i parnih je:",neparni-parni);