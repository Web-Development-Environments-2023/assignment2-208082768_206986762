function welcomePage(){
    $("#WelcomePage").show();
    $("#RegisterPage").hide();
    $("#LoginPage").hide();
    closeNav();

}

function registerPage(){
    $("#WelcomePage").hide();
    $("#RegisterPage").show();
    $("#LoginPage").hide();
    // document.getElementById("submit").addEventListener("click",checkInputs);
    closeNav();
}


function loginPage(){
    $("#WelcomePage").hide();
    $("#RegisterPage").hide();
    $("#LoginPage").show();
    closeNav();
}


function aboutPage(){
    openModal();
    closeNav();
}


function openModal(){
    $("#aboutDialog").show();
    document.addEventListener("keydown", closeModalOnEscape);
    document.addEventListener("click", closeModalOnClickOutside);
}

function closeModal(){
    $("#aboutDialog").hide();
    document.removeEventListener("keydown", closeModalOnEscape);
    document.removeEventListener("click", closeModalOnClickOutside);
}


function closeModalOnEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
}
  

function closeModalOnClickOutside(event) {
    if (event.target == $("#aboutDialog")) {
        closeModal();
    }
}


function contactPage(){

}