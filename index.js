let screen = document.querySelector(".screen");
let allButtons = document.querySelectorAll(".button");
let buttonArray = Array.from(allButtons);

buttonArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;
    if (buttonText === "RESET") {
      screen.innerText = "";
    }
    if (buttonText === "=") {
      try {
        screen.innerText = eval(screen.innerText);
      } catch {
        screen.innerText = "invalid input";
      }
    } else {
      screen.innerText += buttonText;
    }
  });
});
