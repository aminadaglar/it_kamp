niz=[1,2,3,4];
proizvod=1;
zbir=0;
for(i=0;i<niz.length;i++)
{
    zbir+=niz[i];
    proizvod*=niz[i];
}
console.log("zbir je: ", zbir,", a proizvod:", proizvod);