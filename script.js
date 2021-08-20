const playAudio = function (text) {
  let audio;
  switch (text) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;

    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;

    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;

    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;

    default:
      console.log(btnText);
      break;
  }
  audio.play();
};

const buttonAnimation = function (text) {
  const activeBtn = document.querySelector("." + text);
  activeBtn.classList.add("pressed");
  setTimeout(() => activeBtn.classList.remove("pressed"), 100);
};

// Detecting button press
const btns = document.querySelectorAll(".drum");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const btnText = this.textContent;
    playAudio(btnText);
    buttonAnimation(btnText);
  });
}

// Detecting keyboard press
document.addEventListener("keypress", function (event) {
  playAudio(event.key);
  buttonAnimation(event.key);
});
