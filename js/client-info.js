document.addEventListener("DOMContentLoaded", function () {

    // Get booking form
    let clientInfoForm = document.getElementById("client-info-form");

    // Event listener for form submission
    clientInfoForm.addEventListener('submit', function (event) {

        // Prevent default form submission behavior
        event.preventDefault();

        // change to client_info.html
        window.location.href = "../html/confirmation.html";
    });
});
