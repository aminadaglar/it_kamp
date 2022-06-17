function palindrome(rec){
    rec=rec.split(" ").join("");
    for(i=0;i<rec.length/2;i++)
    {
        if(rec[i]!==rec[rec.length-i-1])
        {
            return false;
        }

    }
    return true;
}

rec="nurses run";

if(palindrome(rec))
{
    console.log("palindrom je.");
}
else
{
    console.log("nije palindrom.");
}