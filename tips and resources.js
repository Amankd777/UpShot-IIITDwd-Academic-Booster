// Toggle dark mode 
let darkMode = localStorage.getItem("darkMode");

const checkbox = document.querySelector("#checkbox");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  document.querySelector("#navbar-mod").classList.remove("bg-light");
  document.querySelector("#navbar-mod").classList.remove("navbar-light");
  document.querySelector("#sidebar").classList.remove("bg-light");
  document.querySelector("#sidebar").classList.remove("navbar-light");
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  document.querySelector("#navbar-mod").classList.add("bg-light");
  document.querySelector("#navbar-mod").classList.add("navbar-light");
  document.querySelector("#sidebar").classList.add("bg-light");
  document.querySelector("#sidebar").classList.add("navbar-light");
  localStorage.setItem("darkMode", null);
}

if(darkMode === "enabled"){
  enableDarkMode();
}

checkbox.addEventListener("change", () => {
  darkMode = localStorage.getItem("darkMode");
  if(darkMode !== "enabled"){
    enableDarkMode();
  } else{
    disableDarkMode();
  }
      // document.body.classList.toggle("dark-mode");
      // document.querySelector("#navbar-mod").classList.toggle("bg-light");
      // document.querySelector("#navbar-mod").classList.toggle("navbar-light");
      // document.querySelector("#sidebar").classList.toggle("bg-light");
      // document.querySelector("#sidebar").classList.toggle("navbar-light");
  })