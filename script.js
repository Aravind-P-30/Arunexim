function showMessage() {
    alert("Thank you for contacting Arun Exim. We will get back to you soon.");
}

window.addEventListener("scroll", function() {

    const navbar = document.getElementById("navbar");

    if(window.scrollY > 100){
        navbar.style.background = "#0f6d34";
    }
    else{
        navbar.style.background = "rgba(0,0,0,0.4)";
    }

});
