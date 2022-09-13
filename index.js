let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");
let death=document.createElement("div");
active.setAttribute("id","death");
let recover=document.createElement("div");
active.setAttribute("id","death");
div.append(input,button,active,death,recover);
document.body.append(div);

async function foo(){
    let countryname=document.getElementById("country").value;
    console.log(countryname);
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let res= await fetch(url);
    let res1= await res.json();
    console.log(res1);
    let index=res1.length-1;
    console.log(res1[index].Active);
    active.innerHTML=`Total Active Case: ${res1[index].Active}`
    death.innerHTML=`Total Death Case: ${res1[index].Deaths}`
    recover.innerHTML=`Total Recovered Case: ${res1[index].Recovered}`
}