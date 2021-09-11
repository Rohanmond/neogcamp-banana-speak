// // console.log("script is workign")
// //alert
// alert("this script works")
// //promt
// var username=prompt("give me your username:");
// alert(username);

var buttonTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input");
buttonTranslate.addEventListener("click",function clickEvenHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
})

