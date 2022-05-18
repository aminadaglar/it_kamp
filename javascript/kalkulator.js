
while(true){
    operacija=prompt("unesite operaciju:");
    if(Number(operacija)===0||operacija==="exit")
    {
        break;
    }
    a=Number(prompt("unesite prvi broj"));
    b=Number(prompt("unesite drugi broj"));
    if(operacija==="+")
    {
        console.log(a+b);
    }
    else if(operacija==="-")
    {
        console.log(a-b);
    }
    else if(operacija==="*")
    {
        console.log(a*b);
    }
    else if(operacija==="/")
    {
        console.log(a/b);
    }
    else{
        console.log("greska");
    }
}