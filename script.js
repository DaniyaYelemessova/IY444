// ---quiz javascript----//
const buttonn = document.querySelector('#btn');
const answer = document.querySelector('#rightAnswer');
const answer1 = document.querySelector('#rightAnswer1');
const answer2 = document.querySelector('#rightAnswer2');
const answer3 = document.querySelector('#rightAnswer3');
const answer4 = document.querySelector('#rightAnswer4');
buttonn.addEventListener('click', answers);


function answers(e){
    e.preventDefault();
    let points = 0;
    if(document.querySelector('#answer1').checked){
        answer.textContent = 'Great! Your answer is right!';
        answer.classList.add("right")
        points++
    }
    else {
        answer.textContent= 'Right answer is Harbour Bridge';
        answer.classList.add("right")
    }


    if(document.querySelector('#answer2').checked){
        answer1.textContent = 'Great! Your answer is right!';
        answer1.classList.add("right")
        points++
    }
    else {
        answer1.textContent= 'Right answer is Victoria Peak';
        answer1.classList.add("right")
    }

    if(document.querySelector('#answer3').checked){
        answer2.textContent = 'Great! Your answer is right!';
        answer2.classList.add("right")
        points++
    }
    else {
        answer2.textContent= 'Right answer is 93 meters';
        answer2.classList.add("right")
    }


    if(document.querySelector('#answer4').checked){
        answer3.textContent = 'Great! Your answer is right!';
        answer3.classList.add("right")
        points++
    }

    else {
        answer3.textContent= 'Right answer is  good wildlife before rain starts ';
        answer3.classList.add("right")
    }


    swal("Good job!", "Your points: " + points);



} 





// Select the first element with the class 'toggle-button' (used for the mobile menu toggle)
const toggleButton = document.getElementsByClassName('toggle-button')[0]

// Select the first element with the class 'navbar-links' (the navigation menu links)
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
// Toggle the 'active' class on the navigation links when the button is clicked
  navbarLinks.classList.toggle('active')
});

// Select the button with the ID 'resource-btn'
const button = document.getElementById('resource-btn')

// Add a click event listener to the button
button.addEventListener("click", goToResource)


// Function to redirect the user to the 'resources.html' page
function goToResource(){
  window.location.href = "resources.html";
}



