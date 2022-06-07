niz1=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(i=0;i<niz1.length;i++)
{
    ispis=""
    for(j=0;j<niz1.length-1-i;j++)
    {
        ispis+="  ";
    }
    ispis+=niz1[i][niz1[i].length-1-i];
    console.log(ispis);
}