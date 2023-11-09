let myForm = document.querySelector("#form");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let msg = document.querySelector(".msg");
let submit = document.querySelector("#submit");

// myFrom.addEventListener('submit', myFunction);

// function myFunction(callback){
//     callback.preventDefault()


//     if(firstName.value === "") {
//         alert("Firstname can not be blank")
//     }
//     if(lastName.value === ''){
//         alert("Lastname cannot be blank")
//     }
//     if(email.value === '' ){
//         alert("input email")
//     }
//     if(password.value === '') {
//         alert("password cannot be empty")
//     }
//     if(password.value !== confirmPassword.value) {
//         alert("password not the same")
//     }else {

//     }

// }



myForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    !validateEmail(email.value) ||
    password.value === "" ||
    password.value !== confirmPassword.value
  ) {
    msg.textContent = "Please fill in all fields correctly.";
  } else {
    // Simulate sending a request to the server 
    try {
      // Assuming this is your async function
      await simulateServerRequest();

      // If the request is successful, reset the form and enable the button
      myForm.reset();
      msg.textContent = "Form submitted successfully!";
    } catch (error) {
      msg.textContent = "Error submitting the form. Please try again.";
    }
  }
});


// Function to simulate an async request to the server
function simulateServerRequest() {
  return new Promise((resolve, reject) => {
    // Simulate a delay to represent an asynchronous operation
    setTimeout(() => {
      // Assuming the request is successful
      resolve();
    }, 2000);
  });
}

// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}