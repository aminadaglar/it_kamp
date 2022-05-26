niz=[5,48,7,1,77,1,45,888,974,900];
najveci=0;
niz_najveca_2=[0,0];
for(i=0;i<niz.length;i++)
{
    if(niz[i]>niz_najveca_2[0]&&niz[i]>niz_najveca_2[1])
    {
        niz_najveca_2.unshift(niz[i]);
    }
    else if(niz[i]>niz_najveca_2[1])
    {
        niz_najveca_2[1]=niz[i];
    }
}
console.log("drugi najveci element je:", niz_najveca_2[1]);
