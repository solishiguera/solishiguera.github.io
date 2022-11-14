var element = document.getElementById("buttons");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function() {
  stickyNav()
};

if(window.innerWidth < 770) {
  element.classList.add("invisible");
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