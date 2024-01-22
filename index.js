
//Detecting Button Press
var buttons = document.querySelectorAll(".drum");

buttons.forEach(function(buttons){
    buttons.addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        playDrums(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
         
    });
}) 
 
// Detecting Keyboard Press
document.addEventListener("keypress", function(event){
    playDrums(event.key);
    buttonAnimation(event.key);

});



function playDrums(key){
    switch (key) {
        case "a":
            var audioTom1 = new Audio("sounds/tom-1.mp3")
            audioTom1.play(); 
            break;
        case "s":
            var audioTom2 = new Audio("sounds/tom-2.mp3")
            audioTom2.play(); 
            break;

        case "d":
            var audioTom2 = new Audio("sounds/tom-3.mp3")
            audioTom2.play(); 
            break;

        case "f":
            var audioTom2 = new Audio("sounds/tom-4.mp3")
            audioTom2.play(); 
            break;

        case "j":
            var audioTom2 = new Audio("sounds/snare.mp3")
            audioTom2.play(); 
            break;

        case "k":
            var audioTom2 = new Audio("sounds/crash.mp3")
            audioTom2.play(); 
            break;

        case "l":
            var audioTom2 = new Audio("sounds/kick-bass.mp3")
            audioTom2.play(); 
            break;



        default: console.log(buttonInnerHTML)
            
    }
}

function buttonAnimation(currentKey){

    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed"); //adding pressed class which we have styled in css file...
    setTimeout(function(){
        activebutton.classList.remove("pressed");

    },100);

}