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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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

var modalSyllabus = $("#Syllabus");
$(".modal-box-4").click(function(){
  setTimeout(function(){
    modalSyllabus.show();
  },250)
});
$(".close").click(function(){
  modalSyllabus.hide();
  $("body").css("overflow-y","visible");
});

var modalquiz = $("#quiz");
$(".modal-box-5").click(function(){
  setTimeout(function(){
    modalquiz.show();
  },250)
});
$(".close").click(function(){
  modalquiz.hide();
  $("body").css("overflow-y","visible");
});

