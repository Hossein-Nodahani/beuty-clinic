let hambergerMenu = document.querySelector(".hamberger-menu");
let menu = document.querySelector(".header-items");
let firstLine = document.getElementById("first-line-hamberger");
let secondLine = document.getElementById("second-line-hamberger");
let thirdLine = document.getElementById("third-line-hamberger");

let nameInput =document.querySelector(".name-input");
let nameValidateText =document.querySelector(".name");
let familyInput =document.querySelector(".family-input");
let familyValidateText =document.querySelector(".family");
let emailInput =document.querySelector(".email-input");
let emailValidateText =document.querySelector(".email");
let arrow = document.getElementById("arrow");


nameInput.addEventListener("change" , validateName );
familyInput.addEventListener("change" , validateFamily );
emailInput.addEventListener("change" , validateEmail);
arrow.addEventListener("click" , goToTop)
hambergerMenu.addEventListener("click" , controlMenu)
menu.addEventListener("click" , controlMenu);




function controlMenu (){
    menu.classList.toggle("move-menu");
    firstLine.classList.toggle("reotate45deg")
    secondLine.classList.toggle("remove")
    thirdLine.classList.toggle("reotate-45deg")

}





function validateName(event){
    const name = event.target.value;
    if(name.length <= 1){
        nameValidateText.style.display ="inline";
    }else {
        nameValidateText.style.display ="none";
    }
}

function validateFamily(){
    const family = event.target.value;
    if(family.length <= 1){
        familyValidateText.style.display ="inline";
    }else{
        familyValidateText.style.display ="none";
    }
}

function validateEmail(){
    const email = event.target.value;
    if(email.length <= 4 || !email.includes("@") || !email.includes(".")){
        emailValidateText.style.display ="inline";
    }else{
        emailValidateText.style.display ="none";
    }
}


function controlArrowVisibility(){
    if (window.scrollY > 100){
        arrow.style.opacity = "1";
  }else{
        arrow.style.opacity = "0";
    }
}

function goToTop(){
    window.scrollTo(0, 0);
}

