
// Toggle dark mode 
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", function(){
    document.body.classList.toggle("dark-mode");
    document.querySelector("#navbar-mod").classList.toggle("bg-light");
    document.querySelector("#navbar-mod").classList.toggle("navbar-light");
  }
)

// Material Select Initialization
// pyq modal box
var modalpyq = $("#pyq");
$(".modal-box-1").click(function(){
  modalpyq.show();
  $("body").css("overflow","hidden");
})
$(".close").click(function(){
  modalpyq.hide();
  $("body").css("overflow","visible");
});

// model modal box
var modalmodel = $("#model");
$(".modal-box-2").click(function(){
  modalmodel.show();
  $("body").css("overflow","hidden");
});
$(".close").click(function(){
  modalmodel.hide();
  $("body").css("overflow","visible");
});

// notes modal box
var modalnotes = $("#notes");
$(".modal-box-3").click(function(){
  modalnotes.show();
  $("body").css("overflow","hidden");
});
$(".close").click(function(){
  modalnotes.hide();
  $("body").css("overflow","visible");
});

