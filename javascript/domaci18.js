niz=[5,48,7,1,77];
najveci=0;
najmanji=niz[0];
for(i=0;i<niz.length;i++){
    if(niz[i]>najveci)
    {
        najveci=niz[i];
    }
    if(niz[i]<najmanji)
    {
        najmanji=niz[i];
    }
}
console.log("razlika izmedju najveceg i najmanjeg je:", najveci-najmanji);