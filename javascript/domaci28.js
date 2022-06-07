niz1=[
    [1,2,3],
    [4,5,6],
    [7,8,9,]
];

var1=niz1[0][niz1.length-1];

for(i=0;i<niz1.length-1;i++)
{
    niz1[0][niz1.length-1-i]=niz1[0][niz1.length-2-i];
}
for(i=0;i<niz1.length-1;i++){
    niz1[i][0]=niz1[i+1][0];
}
for(i=0;i<niz1.length-1;i++)
{
    niz1[niz1.length-1][i]=niz1[niz1.length-1][i+1];
}
for(i=0;i<niz1.length-1;i++)
{
    niz1[niz1.length-1-i][niz1.length-1]=niz1[niz1.length-2-i][niz1.length-1];
}
niz1[1][niz1.length-1]=var1;

for(i=0;i<niz1.length;i++)
{
    red="";
    for(j=0;j<niz1[i].length;j++)
    {
        red+=niz1[i][j]+" ";
    }
    console.log(red);
}
