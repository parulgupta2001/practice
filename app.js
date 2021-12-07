var btn = document.querySelector("#cl");
var txt = document.querySelector("#txt");
var output = document.querySelector("#output")

function clickEventHandler(){
    txt.innerText = "Parul is awesome"
   console.log("Clicked!");
    output.innerText = "Parul is awesome"
}

btn.addEventListener("click", clickEventHandler);