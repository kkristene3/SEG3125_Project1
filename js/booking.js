
document.addEventListener("DOMContentLoaded", function () {

    //Validate if time inputted ends with 00 or 30 mins
    checkTime("startTime");
    checkTime("endTime");

    // get toggle buttons
    let elementaryButton = document.getElementById("elementary-button");
    let highSchoolButton = document.getElementById("high-school-button");

    // Get the prices
    let mathPrice = document.getElementById("math-price");
    let englishPrice = document.getElementById("english-price");
    let sciencesPrice = document.getElementById("sciences-price");

    // get the grade buttons div
    let grades = document.getElementById("grade-buttons");

    // Get booking form
    let bookingForm = document.getElementById("booking-form");

    // Event listener for elementary button
    elementaryButton.addEventListener('click', function () {
        // change class
        this.classList.add("btn-clicked");
        highSchoolButton.classList.remove("btn-clicked");

        // change toggle words
        elementaryButton.innerText = "✔ Elementary";
        highSchoolButton.innerText = "High School";

        // change prices in button
        mathPrice.innerHTML = "<sup>$</sup>20<sub>/ hour</sub>";
        englishPrice.innerHTML = "<sup>$</sup>15<sub>/ hour</sub>";
        sciencesPrice.innerHTML = "<sup>$</sup>20<sub>/ hour</sub>";

        // change grades
        grades.innerHTML = "<button class=\"btn btn-grade active\" id=\"grade1\" onclick=\"changeGradeButton(this)\">6</button>\n" +
            "                <button class=\"btn btn-grade\" id=\"grade2\" onclick=\"changeGradeButton(this)\">7</button>\n" +
            "                <button class=\"btn btn-grade\" id=\"grade3\" onclick=\"changeGradeButton(this)\">8</button>";

    });

    // event listener for high school button
    highSchoolButton.addEventListener('click', function () {
        // change class
        this.classList.add("btn-clicked");
        elementaryButton.classList.remove("btn-clicked");
        elementaryButton.classList.remove("btn-primary");
        elementaryButton.classList.add("btn-secondary");

        // change toggle words
        elementaryButton.innerText = "Elementary";
        highSchoolButton.innerText = "✔ High School";

        // change prices in button
        mathPrice.innerHTML = "<sup>$</sup>30<sub>/ hour</sub>";
        englishPrice.innerHTML = "<sup>$</sup>25<sub>/ hour</sub>";
        sciencesPrice.innerHTML = "<sup>$</sup>30<sub>/ hour</sub>";

        // change grades
        grades.innerHTML = "<button class=\"btn btn-grade active\" id=\"grade9\" onclick=\"changeGradeButton(this)\">9</button>\n" +
            "                <button class=\"btn btn-grade\" id=\"grade10\" onclick=\"changeGradeButton(this)\">10</button>\n" +
            "                <button class=\"btn btn-grade\" id=\"grade11\" onclick=\"changeGradeButton(this)\">11</button>" +
            "                <button class=\"btn btn-grade\" id=\"grade12\" onclick=\"changeGradeButton(this)\">12</button>";
    });

    // Event listener for form submission
    bookingForm.addEventListener('submit', function (event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Validate date input
        if (checkDate()) {
            // If validation passes, redirect to the confirmation page
            window.location.href = "../html/client_info.html";
        }
    });
});

/**
 * Validate if time inputted ends with 00 or 30 mins
 * @param id
 */
function checkTime(id) {
    document.getElementById(id).addEventListener("change", function() {
        let startTime = this.value; // Get the entered time
        let [hours, minutes] = startTime.split(":").map(Number); // Extract hours and minutes
    
        if (minutes !== 0 && minutes !== 30) {
            alert("Please select a time with 00 or 30 minutes.");
            this.value = ""; // Reset input
        }
    });
}

/**
 * Change the active button to the one clicked
 * @param button
 */
function changeGradeButton(button) {
    let gradeButtons = document.querySelectorAll("button.btn-grade");

    gradeButtons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

function changeSubjectButton(button) {
    let subjectButtons = document.querySelectorAll("button.btn-subject");

    subjectButtons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

/**
 * Check if the date is valid
 */
function checkDate() {
    let dateVal = document.getElementById("booking-date").value;
    let today = new Date();
    let bookingDate = new Date(dateVal + "T00:00:00");

    // get time
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;

    // get hours and minutes
    let [h, m] = startTime.split(":").map(Number);
    let s = 0; // seconds
    bookingDate.setHours(h);
    bookingDate.setMinutes(m);

    // calculate end time
    let [endH, endM] = endTime.split(":").map(Number);
    let endDate = new Date(bookingDate);
    endDate.setHours(endH);
    endDate.setMinutes(endM);

    // checks
    if (dateVal === "") {
        alert("Please select a date.");
        return false;
    }
    if (endDate - bookingDate < 3600000) { // 1 hour = 3600000 milliseconds
        alert("The duration must be at least 1 hour.");
        return false;
    }
    if (bookingDate < today) {
        alert("Please select a date that is today or later.");
        return false;
    }
    return true; // date is correctly inputted
}