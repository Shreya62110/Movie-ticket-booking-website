 document.getElementById("registrationForm").addEventListener("submit", function(event) {

    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    if (firstName.length < 6) {
        alert("First name must have minimum 6 characters");
        event.preventDefault();
    }

    else if (!email.includes("@")) {
        alert("Enter valid email");
        event.preventDefault();
    }

    else if (mobile.length != 10) {
        alert("Mobile must be 10 digits");
        event.preventDefault();
    }

    else {
        alert("Registration Successful!");
    }

});