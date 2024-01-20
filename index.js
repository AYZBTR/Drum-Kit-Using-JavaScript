/* 

document.querySelector("button").addEventListener("click",handleClick)
function handleClick(){
    alert("clicekd")
} */

var buttons = document.querySelectorAll(".drum");

buttons.forEach(function(buttons){
    buttons.addEventListener("click", function(){
        var audio = new Audio("sounds/crash.mp3")
        audio.play();
    })
})