window.addEventListener("load", () => {

setTimeout(() => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";
loader.style.transition = "0.8s";

setTimeout(() => {

loader.style.display = "none";

},800);

},2500);

});

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for contacting Arun Exim. Our team will contact you shortly."
);

this.reset();

});

window.addEventListener("scroll", () => {

const header = document.getElementById("header");

if(window.scrollY > 50){

header.style.background="#000";

}else{

header.style.background="rgba(0,0,0,.7)";

}

});
