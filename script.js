const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for contacting Arun Exim. We will reply soon.");

form.reset();

});

window.addEventListener("scroll", () => {

const header = document.getElementById("header");

if(window.scrollY > 100){
header.style.background="#000";
}
else{
header.style.background="rgba(0,0,0,.8)";
}

});
