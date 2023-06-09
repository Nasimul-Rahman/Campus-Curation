function validateSignInForm() {
    var email = document.getElementById("signin-email").value;
    var password = document.getElementById("signin-password").value;

    if (email === "" || password === "") {
        alert("Please fill in all the fields.");
        return false;
    }
    return true;
}

function validateSignUpForm() {
    var name = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all the fields.");
        return false;
    }

    return true;
}

function validateForm(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        var nameError = document.getElementById("nameError");
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");
        var confirmPasswordError = document.getElementById("confirmPasswordError");

        nameError.innerHTML = "";
        emailError.innerHTML = "";
        passwordError.innerHTML = "";
        confirmPasswordError.innerHTML = "";

        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return false;
        }

        if (!name.match(/^[A-Za-z\s]+$/)) {
            nameError.innerHTML = "Invalid name format. Please use only alphabetic characters and spaces.";
        }

        if (!email.match(/^[a-zA-Z0-9._%+-]+@(?:gmail|hotmail)\.com$/)) {
            emailError.innerHTML = "Invalid email format. Please use a valid Gmail or Hotmail address.";
        }

        if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)) {
            passwordError.innerHTML = "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.";
        }

        if (password !== confirmPassword) {
            confirmPasswordError.innerHTML = "Passwords do not match.";
        }

        if (!nameError.innerHTML && !emailError.innerHTML && !phoneError.innerHTML && !passwordError.innerHTML && !confirmPasswordError.innerHTML) {
            alert("Welcome to the family! You have been successfully registered.");
            return true;
        }

        return false;
    }

     // Retrieve the form element
     const form = document.getElementById('registrationForm');
     
     // Create an empty JSON object
     const formData = {
formFields: []
};

// Add an event listener for the form submission
form.addEventListener('submit', function (event) {
event.preventDefault(); // Prevent the form from submitting

// Clear existing form field data
formData.formFields = [];

// Loop through each input field in the form
for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];

    // Skip the submit button
    if (element.type === 'submit') {
        continue;
    }

    // Add the field name and value to the formFields array
    formData.formFields.push({
        name: element.name,
        value: element.value
    });
}

// Do something with the JSON data
console.log(JSON.stringify(formData));

// Reset the form fields
form.reset();

});
