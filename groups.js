// Toggle dark mode 
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", function(){
    document.body.classList.toggle("dark-mode");
    document.querySelector("#navbar-mod").classList.toggle("bg-light");
    document.querySelector("#navbar-mod").classList.toggle("navbar-light");
  }
)
