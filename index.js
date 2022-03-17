// Toggle dark mode 
let darkMode = localStorage.getItem("darkMode");

const checkbox = document.querySelector("#checkbox");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  document.querySelector("#navbar-mod").classList.remove("bg-light");
  document.querySelector("#navbar-mod").classList.remove("navbar-light");
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  document.querySelector("#navbar-mod").classList.add("bg-light");
  document.querySelector("#navbar-mod").classList.add("navbar-light");
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
  })



// Material Select Initialization
// pyq modal box
var modalpyq = $("#pyq");
$(".modal-box-1").click(function(){  
  setTimeout(function(){
    modalpyq.show();
  },750)  
})
$(".close").click(function(){
  modalpyq.hide();
  $("body").css("overflow-y","visible");
});

// model modal box
var modalmodel = $("#model");
$(".modal-box-2").click(function(){
  setTimeout(function(){
    modalmodel.show();
  },750)  
});
$(".close").click(function(){
  modalmodel.hide();
  $("body").css("overflow-y","visible");
});

// notes modal box
var modalnotes = $("#notes");
$(".modal-box-3").click(function(){
  setTimeout(function(){
    modalnotes.show();
  },750)
});
$(".close").click(function(){
  modalnotes.hide();
  $("body").css("overflow-y","visible");
});

