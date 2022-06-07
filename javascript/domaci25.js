niz1=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

zbirKolona=[];
for(i=0;i<niz1[0].length;i++)
{
    zbir=0;
    for(j=0;j<niz1.length;j++)
    {
        zbir+=niz1[j][i];
    }
    zbirKolona.push(zbir);
}
niz1.push(zbirKolona);
console.log(niz1);

// for(i=0;i<niz1.length;i++)
// {
//     red="";
//     for(j=0;j<niz1[i].length;j++)
//     {
//         red+=niz1[i][j]+" ";
//     }
//     console.log(red);
// }