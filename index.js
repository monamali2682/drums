// *********addingEventListener to mouse clicks on screen buttons *******//
for (var a = 0; a < 7; a++) {
  document.querySelectorAll("button")[a].addEventListener("click", playSound1);
}
// *********addingEventListener to press on keyboard buttons *******//

document.addEventListener("keydown", playSound2);

// writing callback funtion for clickig button//
function playSound1() {
  var button_name = this.innerHTML; /// var this= event.elementname
  playSound(button_name);
  addAnimation(button_name);
}


// writing callback funtion for pressing keys//
function playSound2(et) { ///or playSound2()
  var key_name = et.key; ///or event.key
  playSound(key_name);
  addAnimation(key_name);
}


/////generalised function_playSound//////
function playSound(aaa) {


  switch (aaa) {
    case "w":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
  }
}
//////////*****generalised funtion addAnimation********//////
function addAnimation(a) {
  document.querySelector("." + a).classList.add("pressed");
  setTimeout(function() {               /////setTimeout(function,time);
    document.querySelector("." + a).classList.remove("pressed");
  }, 100);
}
