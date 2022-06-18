function amountToCoins(vrednost, niz)
{
    //sortiranje novcica:
    niz.sort((a,b)=>a+b);
    // rez=true;
    // while(rez)
    // {
    //     rez=false;
    //     for(i=0;i<niz.length-1;i++)
    //     {
    //         if(niz[i]<niz[i+1])
    //         {
    //             pomVar=niz[i];
    //             niz[i]=niz[i+1];
    //             niz[i+1]=pomVar;
    //             rez=true;
    //         }
    //     }
    // }
    novcanice=[];
    for(i=0;i<niz.length;i++)
    {
        while(vrednost>=niz[i])
        {
            vrednost-=niz[i];
            novcanice.push(niz[i]);
        }
    }
    return novcanice.join(",");
}
vrednost=46;
novcici=[25,10,5,2,1];
console.log(amountToCoins(vrednost,novcici)); 
