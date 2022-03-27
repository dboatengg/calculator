let screen = document.querySelector(".screen");
let allButtons = document.querySelectorAll(".button");
let buttonArray = Array.from(allButtons);

// buttonArray.map((button) => {
//   button.addEventListener("click", (e) => {
//     const buttonText = e.target.innerText;
//     if (buttonText == "reset") {
//       screen.innerText = "";
//     }
//     if (buttonText == "del") {
//       screen.innerText.slice(0, -1);
//     }
//     if (buttonText === "=") {
//       try {
//         screen.innerText = eval(screen.innerText);
//       } catch {
//         screen.innerText = "invalid input";
//       }
//     } else {
//       screen.innerText += buttonText;
//       console.log(screen.innerText);
//     }
//   });
// });

buttonArray.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        screen.innerText = "";
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Error";
        }
        break;
      case "DEL":
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});
