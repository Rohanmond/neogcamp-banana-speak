// // console.log("script is workign")
// //alert
// alert("this script works")
// //promt
// var username=prompt("give me your username:");
// alert(username);

var buttonTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
function clickHandler(){
    outputDiv.innerText=txtInput.value+" jdhgkh ";
}

buttonTranslate.addEventListener("click",clickHandler);

