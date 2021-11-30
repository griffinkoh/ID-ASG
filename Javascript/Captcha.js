const captcha = document.querySelector(".code"),
reload = document.querySelector(".reload"),
inputField = document.getElementById('test'),
check = document.querySelector(".check"),
statusText = document.querySelector(".status");

//characters possible combinations
let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
            'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
            'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '!' , '@', '#',
            '$' , '%', '^', '&' , '*', '(', ')' , '[', ']'];

//getting random generated captcha through formula
function getCaptcha(){
    for (let i = 0; i < 6; i++){
        let random = characters[Math.floor(Math.random() * characters.length)];
        captcha.innerText += `${random}`;
    }
}

getCaptcha();

// changing captcha every click
reload.addEventListener("click", e  =>{
    captcha.innerText = "";
    e.preventDefault();
    getCaptcha();
});


//display text for corrent and incorrect captcha
check.addEventListener("click", e =>{
    e.preventDefault();
    statusText.style.display = "block";
    let finalCaptcha = inputField.value;
    if (finalCaptcha == captcha.innerText){
        console.log("good");
        statusText.style.color = "green";
        statusText.innerText = "You are not a robot!";
    }
    else if (finalCaptcha.length == 0){
        statusText.style.color = "#ff0000";
        statusText.innerText = "Please fill up the captcha";
    }
    else{
        console.log("bad");
        statusText.style.color = "#ff0000";
        statusText.innerText = "Captcha not matched. Please try again!";
    }    
})

//error checking
const nameTxt = document.getElementById('name'),
choice = document.querySelector('.choice option'),
contactNo = document.getElementById('contactNo'),
adults = document.getElementById('adults'),
children = document.getElementById('children'),
elderly = document.getElementById('elderly'),
date = document.getElementById('Date'),
time = document.getElementById('time'),
error = document.querySelector('.error'),
error2 = document.querySelector('.error2'),
error3 = document.querySelector('.error3'),
error4 = document.querySelector('.error4'),
error5 = document.querySelector('.error5'),

submit = document.querySelector('.submit-button');

submit.addEventListener("click", e =>{
    //for name check
    if (nameTxt.value.length == 0){
        error.innerText = "Please fill in your name"
        error.style.color = "red"
    }
    
    if(contactNo.value.length == 0){
        error2.innerText = "Please fill in your contact number"
        error2.style.color = "red"
    }    
    else if (isNaN(contactNo.value)){
        error2.innerText = "Please fill in a CONTACT NUMBER"
        error2.style.color = "red"
    }

    if(adults.value.length == 0){
        error3.innerText = "Please fill in the number of adults going"
        error3.style.color = "red"
    }    
    else if (isNaN(adults.value)){
        error3.innerText = "Please fill in a NUMBER"
        error3.style.color = "red"
    }
    else if (adults.value >= 20){
        error3.innerText = "Please fill in a proper number"
        error3.style.color = "red"
    }

    if(children.value.length == 0){
        error4.innerText = "Please fill in the number of children going"
        error4.style.color = "red"
    }    
    else if (isNaN(children.value)){
        error4.innerText = "Please fill in a NUMBER"
        error4.style.color = "red"
    }
    else if (children.value >= 20){
        error4.innerText = "Please fill in a proper number"
        error4.style.color = "red"
    }

    if(elderly.value.length == 0){
        error5.innerText = "Please fill in the number of children going"
        error5.style.color = "red"
    }    
    else if (isNaN(elderly.value)){
        error5.innerText = "Please fill in a NUMBER"
        error5.style.color = "red"
    }
    else if (elderly.value >= 20){
        error5.innerText = "Please fill in a proper number"
        error5.style.color = "red"
    }   
})
