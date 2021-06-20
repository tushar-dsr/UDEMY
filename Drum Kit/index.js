//mouse or touch press sound
for (var i = 0; i < document.querySelectorAll(".drum").length; ++i) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnnimation(buttonInnerHTML);
  });
}

//Key press sound
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnnimation(event.key);
});

//making sound
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      var noise = new Audio("sounds/scream.mp3");
      noise.play();
      break;
  }
}

function buttonAnnimation(currentKey) {
  if (
    currentKey === "w" ||
    currentKey === "a" ||
    currentKey === "s" ||
    currentKey === "d" ||
    currentKey === "j" ||
    currentKey === "k" ||
    currentKey === "l"
  ) {
    var buttonPressed = document.querySelector("." + currentKey);
    buttonPressed.classList.add("pressed");
    setTimeout(function () {
      buttonPressed.classList.remove("pressed");
    }, 100);
  } else {
    document.querySelector("body .set").classList.add("wrongOption");
    document.querySelector("h1").classList.add("wrongOption");
    setTimeout(function () {
        document.querySelector("body .set").classList.remove("wrongOption");
        document.querySelector("h1").classList.remove("wrongOption");
    }, 100);
  }
}
