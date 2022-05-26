broj="025468";
broj2="";
for(i=0;i<broj.length;i++)
{
    broj2+=broj[i];
    if(broj[i]%2===0 && broj[i+1]%2===0)
    {
        broj2+="-";
    }
}
console.log(broj2);
