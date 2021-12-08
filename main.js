var DateOfBirth=document.querySelector("#date-of-birth");
var LuckyNumber=document.querySelector("#lucky-number");
var buttontranslate=document.querySelector("#btn-translate");
var result=document.querySelector("#results");

function isMyBirthdayLucky()
{
    var sum=0;
    while(n>0)
    {
        var r=n%10;
        sum+=r;
        n=n/10;

    }
    if(sum%LuckyNumber === 0)
    {
        result.innerText= {LuckyNumber} + "is a lucky number!! 🥳 🥳";

    }

};

buttontranslate.addEventListener("click",isMyBirthdayLucky);



