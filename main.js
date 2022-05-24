let nameInput =document.querySelector(".name-input");
let nameValidateText =document.querySelector(".name");
let familyInput =document.querySelector(".family-input");
let familyValidateText =document.querySelector(".family");
let emailInput =document.querySelector(".email-input");
let emailValidateText =document.querySelector(".email");

nameInput.addEventListener("change" , validateName );
familyInput.addEventListener("change" , validateFamily );
emailInput.addEventListener("change" , validateEmail);

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

