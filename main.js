// Global DOM selectors
const hamburgerMenu = document.querySelector('.hamburger')

// Mobile > toggle navigation menu
function toggleHamburgerMenu() {
  this.classList.toggle('is-active')
}

// Mobile > user clicks hambruger menu > toggle menu open
hamburgerMenu.addEventListener('click', toggleHamburgerMenu)
