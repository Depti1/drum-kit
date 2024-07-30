/*document.querySelector("button").addEventListener("click" , clicked);

function clicked(){
    alert("i got click");
}*/

/*document.querySelector(".drum").addEventListener("click" , function(){
    alert("click me");
});*/


/*for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        console.log(this.style.color = "white");     /*yaha pe jo i hai woh har ek button mai event add kar raha
                                                  hai or jo this hai woh us exact button ko de rha hai jispe humne 
                                                 click kiya hai mtlb hum jis button ko click kare humko uska color white chaiye*/
        /* ab hum yaha pe switch ka use karenge ki agar a mai click kiya hai toh yeh song bajao */
        /*var buttoninnerhtml = this.innerHTML;
        switch (buttoninnerhtml) {
            case "a":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();

                break;
            case "b":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "c":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "d":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "e":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "f":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            case "g":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();

            default: console.log(buttoninnerhtml);
                break;
        }

    });
}*/



/* var audio = new Audio("sounds\tom-1.mp3");
   audio.play();*/
/*  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();*/











  for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
       // Changes the clicked button's color to white
        
        // Get the innerHTML of the clicked button
        
         //   var buttonInnerHtml = this.innerHTML;
            //console.log(buttonInnerHtml);
     // Get the innerHTML of the clicked button
     var buttonInnerHtml = this.innerHTML.trim().toLowerCase();
        
        
        // Use a switch statement to play the corresponding audio
        switch (buttonInnerHtml) {
            case"a":
                var snare = new Audio('sounds/crash.mp3');
                snare.play();
                break;
            case"b":
                var tom1 = new Audio('sounds/kick-bass.mp3');
                tom1.play();
                break;
            case"c":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "d":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "e":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "f":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "g":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            default:
                console.log(buttonInnerHtml);
                break;
        }
    });
}
