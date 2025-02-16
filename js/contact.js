
document.addEventListener("DOMContentLoaded", function () {

    // get form
    let form = document.getElementById("form-for-contact");

    form.addEventListener('submit', function (event) {

        // check for any html input validation
        if (!form.checkValidity()) {
            return; // stops function if there are invalid fields
        }

        // get name
        let name = document.getElementById("inputName").value;

        // give user feedback
        alert("Thank you for your message, " + name + ". We will reply back to you soon!");
    });
});