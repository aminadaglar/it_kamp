brojRedova=Number(prompt("unesite broj redova"))
jedinice="1";
for(i=1;i<=brojRedova;i++)
{
    console.log(jedinice.replaceAll("1",String(i)));
    // console.log(jedinice*i);
    jedinice+="1";
}