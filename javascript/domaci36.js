function savrsen(broj){
    zbir=0;
    for(i=1;i<broj;i++)
    {
        if(broj%i===0)
        {
            zbir+=i;
        }
    }
    if(zbir===broj)
    {
        return true;
    }
    return false;
}

broj1=6;
if(savrsen(broj1))
{
    console.log("broj je savrsen.");
}
else{
    console.log("broj nije savrsen.");
}