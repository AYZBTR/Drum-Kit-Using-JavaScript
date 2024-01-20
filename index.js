var buttons = document.querySelectorAll(".drum");

buttons.forEach(function(buttons){
    buttons.addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "a":
                var audioTom1 = new Audio("sounds/tom-1.mp3")
                audioTom1.play(); 
                break;
            case "s":
                var audioTom2 = new Audio("sounds/tom.2.mp3")
                audioTom2.play(); 
                break;

            case "d":
                var audioTom2 = new Audio("sounds/tom.2.mp3")
                audioTom2.play(); 
                break;

            case "f":
                var audioTom2 = new Audio("sounds/tom.2.mp3")
                audioTom2.play(); 
                break;

            case "j":
                var audioTom2 = new Audio("sounds/tom.2.mp3")
                audioTom2.play(); 
                break;

            case "k":
                var audioTom2 = new Audio("sounds/tom.2.mp3")
                audioTom2.play(); 
                break;

            case "ljak":
                var audioTom2 = new Audio("sounds/tom.2.mp3")
                audioTom2.play(); 
                break;



            default:
                break;
        }
         
    });
}) 
 




 var audio = new Audio("sounds/crash.mp3")
        audio.play(); 