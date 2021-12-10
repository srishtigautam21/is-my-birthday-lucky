var DateOfBirth=document.querySelector("#date-of-birth");
var LuckyNumber=document.querySelector("#lucky-number");
var buttontranslate=document.querySelector("#btn-translate");
var result=document.querySelector("#results");

function isMyBirthdayLucky()
{
    var dob=DateOfBirth.value;
    dob=dob.replaceAll("-","");
    var sum=0;
    

    for(let i=0;i<dob.length;i++)
    {
        sum= sum+ Number(dob.charAt(i));
        

    }
    if(LuckyNumber.value<=0){
        result.style.display="block";
        result.innerText="The number should be greater than zero";
    }
    else{
        if(sum%LuckyNumber.value === 0)
        {
            result.innerText= "Your birthday is lucky!! 🥳 🥳";

        }
        else{
            result.innerText= "Your birthday is not lucky!!";

        }

    }
    

}

buttontranslate.addEventListener("click",isMyBirthdayLucky);



