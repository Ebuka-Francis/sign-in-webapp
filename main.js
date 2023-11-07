let myFrom = document.querySelector("#form");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let msg = document.querySelector(".msg");
let submit = document.querySelector("#submit");

myFrom.addEventListener('submit', myFunction);

function myFunction(callback){
    callback.preventDefault()

    if(firstName.value === "") {
        alert("Firstname can not be blank")
    }
    if(lastName.value === ''){
        alert("Lastname cannot be blank")
    }
    if(email.value === '' || email.value.includes('@') === 'true'){
        alert("input valid email")
    }
    // else if(email.value.includes('@') === 'true'){
    //     alert('incorrect email')
    // }
    if(password.value === '') {
        alert("password cannot be empty")
    } 
    if(password.value !== confirmPassword.value) {
        alert("password not the same")
    }else {
        alert('sign up successful')
    }
    // callback()

}

