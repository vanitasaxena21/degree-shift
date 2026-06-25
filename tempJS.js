var text=document.getElementById("text");
var cel=document.getElementById("to_cel");
var fahren=document.getElementById("to_fahren");
var submit=document.getElementById("submit_btn");

let temp;
let result= document.getElementById("result");

function convert()
{
    if(to_cel.checked)
    {
       temp=Number(text.value);
        temp=9/5* temp +32;
        result.textContent=temp.toFixed(1) +"*F";

    }
    else if(to_fahren.checked)
        {
            temp=Number(text.value);
            temp=(5/9) * (temp - 32);
            result.textContent=temp.toFixed(1) +"*C";
            
        }
    else
    {
        result.textContent="Select a units";
    }
}