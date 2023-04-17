function welcomePage(){
    $("#WelcomePage").show();
    $("#RegisterPage").hide();
    $("#LoginPage").hide();
    $("#aboutPage").hide();
    $("#contactPage").hide();
    closeNav();

}

function registerPage(){
    $("#WelcomePage").hide();
    $("#RegisterPage").show();
    $("#LoginPage").hide();
    $("#aboutPage").hide();
    $("#contactPage").hide();
    // document.getElementById("submit").addEventListener("click",checkInputs);
    closeNav();
}


function loginPage(){
    $("#WelcomePage").hide();
    $("#RegisterPage").hide();
    $("#LoginPage").show();
    $("#aboutPage").hide();
    $("#contactPage").hide();
    closeNav();
}


function aboutPage(){
    openModal();
    closeNav();
}


function openModal(){
    $("#aboutDialog").show();
    $("#contactDialog").hide();
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
  
//check function
//TODO
function closeModalOnClickOutside(event) {
    // var dialog = $("#aboutDialog");
    // var target = $(event.target);
    // if (!target.is(dialog) && !dialog.has(target).length) {
    //     closeModal();
    // }
}


function contactPage(){
    openContactModal();
    closeNav();
}


function openContactModal(){
    $("#aboutDialog").hide();
    $("#contactDialog").show();
    document.addEventListener("keydown", closeModalOnEscape);
    document.addEventListener("click", closeModalOnClickOutside);
}


function closeContactModal(){
    $("#contactDialog").hide();
    document.removeEventListener("keydown", closeModalOnEscape);
    document.removeEventListener("click", closeModalOnClickOutside);
}