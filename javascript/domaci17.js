niz1=[0, "nesto", 40, 3];
niz2=[0, "nesto", 40, 3];
jednaki=true;
if(niz1.length!==niz2.length)
{
    console.log("nisu jednaki, a nisu ni iste duzine");
}
else{
    for(i=0;i<niz1.length;i++)
    {
        if(niz1[i]!==niz2[i])
        {
            jednaki=false;
            console.log("nisu jednaki");
            break;
        }
    }
}
if(jednaki)
{
    console.log("jednaki su");
}