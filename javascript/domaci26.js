niz1=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

for(i=0;i<niz1.length;i++)
{
    ispis="";
    for(j=0;j<i;j++)
    {
        ispis+="  ";
    }
    ispis+=niz1[i][i];
    console.log(ispis);
}

// for(i=0;i<niz1.length;i++)
// {
//     ispis="";
//     for(j=0;j<niz1[i].length;j++)
//     {
//         if(i===j)
//         {
//             for(j=0;j<i;j++)
//             {
//                 ispis+="  ";
//             }
//             ispis+=niz1[i][j];
//             console.log(ispis);
//         }
//     }
// }