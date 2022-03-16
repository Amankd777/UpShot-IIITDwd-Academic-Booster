// Toggle dark mode 
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", function(){
    document.body.classList.toggle("dark-mode");
    document.querySelector("#sidebar").classList.toggle("bg-light");
    document.querySelector("#sidebar").classList.toggle("navbar-light");
  }
)
  