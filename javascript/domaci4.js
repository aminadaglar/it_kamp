var a=prompt('unesi broj brojeva:')
var neparni=0;
var parni=0;
for(i=0;i<a;i++)
{
    var broj=Number(prompt('unesite broj:'))
    if((broj%2)===1)
    {
        neparni+=broj;
    }
    else
    {
        parni+=broj;
    }
}5
console.log("zbir parnih brojeva je:",Number(parni));
console.log("zbir neparnih brojeva je:",Number(neparni));