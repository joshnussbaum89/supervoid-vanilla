// Global DOM selectors
const hamburgerMenu = document.querySelector('.hamburger')
const mobileNavItems = document.querySelectorAll('.mobile-nav a')
const projectContainer = document.querySelectorAll('.project-container')
let projectData

// Load all project data + assign to projectData variable to be used anywhere onsite
async function getProjectData() {
  let response = await fetch('./assets/data.json')
  let data = await response.json()
  projectData = data
}

// Mobile > toggle navigation menu
function toggleHamburgerMenu() {
  const mobileNav = document.querySelector('.mobile-nav')

  // Toggle active classes for styling
  hamburgerMenu.classList.toggle('active')
  mobileNav.classList.toggle('active')
}

// Hide mobile navigation on desktop
function hideMobileNavOnDesktop() {
  if (window.innerWidth >= 768) {
    const mobileNav = document.querySelector('.mobile-nav')

    // Remove all active classes
    hamburgerMenu.classList.remove('active')
    mobileNav.classList.remove('active')
  }
}

// Open project information modal
function openProjectModal() {
  const projectId = this.getAttribute('data-project-id')

  // TODO: create project info modal with data from projectData
  console.log('project clicked: ', projectId)
}

// Page load > project JSON
window.addEventListener('load', getProjectData)

// Window resize > hide mobile navigation on desktop
window.addEventListener('resize', hideMobileNavOnDesktop)

// Mobile > user clicks hambruger menu > toggle menu open
hamburgerMenu.addEventListener('click', toggleHamburgerMenu)

// Mobile > user clicks hamburger menu > toggle menu open
mobileNavItems.forEach((item) =>
  item.addEventListener('click', toggleHamburgerMenu)
)

// User clicks project > open modal with more information
projectContainer.forEach((project, index) => {
  project.setAttribute('data-project-id', index)
  project.addEventListener('click', openProjectModal)
})
