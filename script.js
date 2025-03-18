document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    if (toggleButton && navbarLinks) {
        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    } else {
        console.log("Mobile menu toggle elements not found!");
    }

    // --- Resource Button ---
    const button = document.getElementById('resource-btn');

    if (button) {
        button.addEventListener("click", goToResource);
    } else {
        console.log("Resource button not found!");
    }

    // Function to redirect the user to the 'resources.html' page
    function goToResource() {
        window.location.href = "resources.html";
    }

    // --- Quiz Javascript ---
    const buttonn = document.querySelector('#btn');
    const answer = document.querySelector('#rightAnswer');
    const answer1 = document.querySelector('#rightAnswer1');
    const answer2 = document.querySelector('#rightAnswer2');
    const answer3 = document.querySelector('#rightAnswer3');
    const answer4 = document.querySelector('#rightAnswer4');

    if (buttonn) {
        buttonn.addEventListener('click', answers);
    } else {
        console.log("Quiz button not found!");
    }

    function answers(e) {
        e.preventDefault();
        let points = 0;

        // Check answers and provide feedback
        if (document.querySelector('#answer1').checked) {
            answer.textContent = 'Great! Your answer is right!';
            answer.classList.add("right");
            points++;
        } else {
            answer.textContent = 'Right answer is Harbour Bridge';
            answer.classList.add("right");
        }

        if (document.querySelector('#answer2').checked) {
            answer1.textContent = 'Great! Your answer is right!';
            answer1.classList.add("right");
            points++;
        } else {
            answer1.textContent = 'Right answer is Victoria Peak';
            answer1.classList.add("right");
        }

        if (document.querySelector('#answer3').checked) {
            answer2.textContent = 'Great! Your answer is right!';
            answer2.classList.add("right");
            points++;
        } else {
            answer2.textContent = 'Right answer is 93 meters';
            answer2.classList.add("right");
        }

        if (document.querySelector('#answer4').checked) {
            answer3.textContent = 'Great! Your answer is right!';
            answer3.classList.add("right");
            points++;
        } else {
            answer3.textContent = 'Right answer is good wildlife before rain starts';
            answer3.classList.add("right");
        }

        // Display result
        swal("Good job!", "Your points: " + points);
    }
});
