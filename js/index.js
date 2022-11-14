var element = document.getElementById("buttons");
var navbar = document.getElementById("navbar");
var arrow = document.getElementById("arrow");
var sticky = navbar.offsetTop;

window.onscroll = function() {
  //stickyNav()
};

if(window.innerWidth < 770) {
  element.classList.add("invisible");
  element.classList.remove("mt-5");
  arrow.classList.remove("d-none");
}  else  {
  element.classList.remove("invisible");
}

function 
stickyNav()
 {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function sendSection(sectionId) { 
  document.getElementById(sectionId).scrollIntoView()
}