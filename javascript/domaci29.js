nums=[-2,1,-3,4,-1,2,1,-5,4];
najveciZbir=0;
najveciNiz=[];
//broj elemenata kroz koji program prolazi pri svakom ponavljanju:
for(i=1;i<=nums.length;i++)
{
//pozicija elementa od kog pocinje:
    for(j=0;j<=nums.length-i;j++)
    {
        deoNiza=nums.slice(j,j+i);
        zbirDelaNiza=deoNiza.reduce((previousValue,currentValue) => previousValue+currentValue);
        if(zbirDelaNiza>najveciZbir)
        {
            najveciZbir=zbirDelaNiza;
            najveciNiz=deoNiza;
        }
    }
}
console.log(najveciNiz," ima najvecu sumu:",najveciZbir);