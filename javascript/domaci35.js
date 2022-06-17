function velikoPocetno(reci){
    //prvi nacin:
    // reci=reci.split("")
    // reci[0]=reci[0].toUpperCase()
    // for(i=0;i<reci.length-1;i++)
    // {
    //     if(reci[i]===" ")
    //     {
    //         reci[i+1]=reci[i+1].toUpperCase()
    //     }
    // }
    // reci=reci.join("");
    // return reci;
    
    //drugi nacin:
    reci=reci.split(" ");
    for(i=0;i<reci.length;i++)
    {
        reci[i]=reci[i].split("");
        reci[i][0]=reci[i][0].toUpperCase();
        reci[i]=reci[i].join("")
    }
    reci=reci.join(" ");
    return reci;
}

reci="the quick brown fox";

console.log(velikoPocetno(reci));