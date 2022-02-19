// Global DOM selectors
const hamburgerMenu = document.querySelector('.hamburger')

// Mobile > toggle navigation menu
function toggleHamburgerMenu() {
  const hamburgerMenu = document.querySelector('.hamburger')
  const mobileNav = document.querySelector('.mobile-nav')

  hamburgerMenu.classList.toggle('active')
  mobileNav.classList.toggle('active')
}

// Mobile > user clicks hambruger menu > toggle menu open
hamburgerMenu.addEventListener('click', toggleHamburgerMenu)
