brojUcenika=Number(prompt("unesite broj ucenika:"))
najvisi=0;
for(i=1;i<=brojUcenika;i++)
{
    visina=Number(prompt("unesite visinu ucenika broj "+i+":"));
    if(visina>najvisi)
    {
        najvisi=visina;
    }
    if(i===1||visina<najnizi)
    {
        najnizi=visina;
    }
}
console.log("najvisi ucenik ima visinu: ",najvisi);
console.log("najnizi ucenik ima visinu: ",najnizi);