const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});


const button = document.getElementById('resource-btn')

button.addEventListener("click", goToResource)

function goToResource(){
  window.location.href = "resources.html";
}
