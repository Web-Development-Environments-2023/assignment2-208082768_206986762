/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
  
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


/* #################################################################################################################################### */
/* #################################################################################################################################### */


function welcomePage(){
  $("#WelcomePage").show();
  $("#RegisterPage").hide();
  $("#LoginPage").hide();
  $("#aboutPage").hide();
  $("#contactPage").hide();
  clearLogPage();
  clearRegPage();
  closeNav();

}

function registerPage(){
  clearLogPage();
  clearRegPage();
  $("#WelcomePage").hide();
  $("#RegisterPage").show();
  $("#LoginPage").hide();
  $("#aboutPage").hide();
  $("#contactPage").hide();
  closeNav();
}


function loginPage(){
  clearLogPage();
  clearRegPage();
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


