niz=[6,4,2];
svi_parni=true;
for(i=0;i<niz.length;i++)
{
    if(niz[i]%2!==0)
    {
        svi_parni=false;
        console.log("nisu svi parni.");
        break;
    }
}
if(svi_parni)
{
    console.log("svi elementi su parni.");
}