/**
 * Change the price of the courses when switching between schooling levels
 */
document.addEventListener("DOMContentLoaded", function () {
    let elementaryButton = document.getElementById("elementary-button");
    let highSchoolButton = document.getElementById("high-school-button");

    elementaryButton.addEventListener('click', function () {
        // change class
        this.classList.add("btn-clicked");
        highSchoolButton.classList.remove("btn-clicked");

        // change price
        document.getElementById("math-price").innerHTML = "<sup>$</sup>20<sub>/ hour</sub>";
        document.getElementById("english-price").innerHTML = "<sup>$</sup>15<sub>/ hour</sub>";
        document.getElementById("sciences-price").innerHTML = "<sup>$</sup>20<sub>/ hour</sub>";

        // change list
        document.getElementById("math-list").innerHTML = "<li>Number Skills and Patterning</li>\n" +
            "                    <li>Addition and Subtraction</li>\n" +
            "                    <li>Multiplication and Division</li>\n" +
            "                    <li>Fractions and Decimals</li>\n" +
            "                    <li>Word Problems</li>";
        document.getElementById("english-list").innerHTML = "<li>Vocabulary</li>\n" +
            "                    <li>Grammar and Syntax</li>\n" +
            "                    <li>Reading Comprehension</li>\n" +
            "                    <li>Phonics and Decoding</li>\n" +
            "                    <li>Writing</li>"
        document.getElementById("sciences-list").innerHTML = "<li>Life Science</li>\n" +
            "                    <li>Physical Science</li>\n" +
            "                    <li>Earth and Space</li>\n" +
            "                    <li>Matter and Energy</li>\n" +
            "                    <li>Structures and Mechanisms</li>";

    });

    highSchoolButton.addEventListener('click', function () {
        // change class
        this.classList.add("btn-clicked");
        elementaryButton.classList.remove("btn-clicked");
        elementaryButton.classList.remove("btn-primary");
        elementaryButton.classList.add("btn-secondary");

        // change price
        document.getElementById("math-price").innerHTML = "<sup>$</sup>30<sub>/ hour</sub>";
        document.getElementById("english-price").innerHTML = "<sup>$</sup>25<sub>/ hour</sub>";
        document.getElementById("sciences-price").innerHTML = "<sup>$</sup>30<sub>/ hour</sub>";

        // change list
        document.getElementById("math-list").innerHTML = "<li>Algebra</li>\n" +
            "                    <li>Geometry</li>\n" +
            "                    <li>Trigonometry</li>\n" +
            "                    <li>Calculus</li>\n" +
            "                    <li>Proability</li>";
        document.getElementById("english-list").innerHTML = "<li>Literary Analysis</li>\n" +
            "                    <li>Writing</li>\n" +
            "                    <li>Grammar and Syntax</li>\n" +
            "                    <li>Oral Communication</li>\n" +
            "                    <li>Essay Writing</li>";
        document.getElementById("sciences-list").innerHTML = "<li>Physics</li>\n" +
            "                    <li>Biology</li>\n" +
            "                    <li>Chemistry</li>\n" +
            "                    <li>Anatomy</li>\n" +
            "                    <li>Cell Structures</li>"
    });
});


