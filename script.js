document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for contacting Arun Exim. We will get back to you soon."
);

this.reset();

});

window.addEventListener("scroll", function(){

const header = document.querySelector("header");

header.style.background =
window.scrollY > 100
? "rgba(0,0,0,0.95)"
: "rgba(0,0,0,0.8)";

});
