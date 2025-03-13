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
