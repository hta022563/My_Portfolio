let MenuTogle = document.getElementById("menu-togle");
let MoblieNav = document.getElementById("mobile-nav");
let BarIcon = document.getElementById("bar-icon");
let CloseIcon = document.getElementById("close-icon");

MenuTogle.addEventListener("click", function(){
  MoblieNav.classList.toggle("active");
  if(MoblieNav.classList.contains("active")){
    BarIcon.style.display = "none";
    CloseIcon.style.display  = "block";
  }
  else {
    BarIcon.style.display = "block";
    CloseIcon.style.display = "none";
  }
});