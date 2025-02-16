
document.addEventListener("DOMContentLoaded", function () {

    /* Validate if time inputted ends with 00 or 30 mins */
    checkTime("startTime");
    checkTime("endTime");
    
});

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
