brojRedova=Number(prompt("unesite broj redova"))
jedinice="";
for(i=1;i<=brojRedova;i++)
{
    jedinice+="1";
    console.log(jedinice.replaceAll("1",String(i)));
    // console.log(jedinice*i);
}