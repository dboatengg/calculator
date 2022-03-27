let screen = document.querySelector(".screen");
const pressSound = new Audio("/images/press.mp3");
const delSound = new Audio("/images/delete.mp3");
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
        delSound.play();
        if (screen.innerText) screen.innerText = screen.innerText.slice(0, -1);
        break;
      default:
        pressSound.play();
        screen.innerText += e.target.innerText;
    }
  });
});

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
})();
