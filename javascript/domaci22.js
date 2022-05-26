niz=["a",1,5,6,5,1,"k","a",45, 4,45,45];
niz2=[];
for(i=0;i<niz.length;i++)
{
    niz2.push(niz[i]);
    for(j=i+1;j<niz.length;j++)
    {
        if(niz[i]===niz[j])
        {
            niz2.pop();
            break;
        }
    }
}
console.log(niz2);