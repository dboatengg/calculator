let screen = document.querySelector(".screen");
let allButtons = document.querySelectorAll(".button");
let buttonArray = Array.from(allButtons);

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
          screen.innerText = "error";
        }
        break;
      case "DEL":
        if (screen.innerText) screen.innerText = screen.innerText.slice(0, -1);
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});

//dark/light/auto mode
const toggle = document.querySelectorAll("#toggle");
const toggleArray = Array.from(toggle);

// toggleArray.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     if (toggle.className == "dark") {
//       document.documentElement.setAttribute("data-theme", "dark");
//       localStorage.setItem("data-theme", "dark");
//       console.log(toggle);
//     }
//     if (toggle.className == "light") {
//       document.documentElement.setAttribute("data-theme", "light");
//       localStorage.setItem("data-theme", "dark");
//       console.log(toggle);
//     }
//   });
// });

let theme = localStorage.getItem("data-theme");
const changeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
};
const changeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
};

toggleArray.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
      changeToLight();
    }
    if (theme === "light") {
      changeToDark();
    }
  });
});
// console.log(toggleArray);
