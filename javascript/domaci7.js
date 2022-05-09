// a=Number(prompt("unesite prvu stranicu"));
// b=Number(prompt("unesite drugu stranicu"));
// c=Number(prompt("unesite trecu stranicu"));
a=6;
b=4;
c=5;
if(a+b>c && a+c>b && b+c>a)
{
    console.log("trougao postoji.");
    if(a===b===c)
    {
        console.log("jednakostranican");
    }
    else if(a===b||b===c||a===c)
    {
        console.log("jednakokraki");
    }
    else{
        console.log("raznostranican");
    }
}
else{
    console.log("trougao ne postoji.");
}