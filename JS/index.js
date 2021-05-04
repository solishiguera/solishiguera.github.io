var i = 0;
var write = 'Hello, I\'m Diego Solis. '; /* The text */
var speed = 75; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < write.length) {
    document.getElementById("typeText").innerHTML += write.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()