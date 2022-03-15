
// Toggle dark mode 
const checkbox = document.querySelector("#checkbox");


checkbox.addEventListener("change", function(){
    document.body.classList.toggle("dark-mode");
    document.querySelector("#navbar-mod").classList.toggle("bg-light");
    document.querySelector("#navbar-mod").classList.toggle("navbar-light");
  }
)

let darkMode = localStorage.getItem("dark-mode");


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

