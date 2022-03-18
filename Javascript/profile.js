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

// Cool pic
$("#myDropdown1").click(function(e) {
  $("#picUpload").click();
});

$("#picUpload").change(function(){
  fastPreview( this );
});

function fastPreview( uploader ) {
    if ( uploader.files ){
          $('#coolImage').attr('src', 
             window.URL.createObjectURL(uploader.files[0])
              );
    }
}

// Profile Pic
$("#myDropdown").click(function(e) {
  $("#imageUpload").click();
});

$("#imageUpload").change(function(){
  fasterPreview( this );
});

function fasterPreview( uploader ) {
    if ( uploader.files ){
          $('#profileImage').attr('src', 
             window.URL.createObjectURL(uploader.files[0])
              );
    }
}


