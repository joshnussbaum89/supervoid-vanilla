// Initialize AOS animation library
AOS.init()

// Global DOM selectors
const mainNavigation       = document.querySelector('.hero-nav')
const hamburgerMenu        = document.querySelector('.hamburger')
const mobileNavItems       = document.querySelectorAll('.mobile-nav a')
const watchPromoReelCTA    = document.querySelector('.watch-promo--js')
const promoReelContainer   = document.querySelector('.promo-reel-container')
const promoReelCloseIcon   = document.querySelector('.promo-reel-container .close')
const projects             = document.querySelector('.projects')
const projectContainer     = document.querySelectorAll('.project-container')
const videos               = document.querySelectorAll('.project-container video')
const projectModal         = document.querySelector('.project-modal')
const projectModalClose    = document.querySelector('.modal-content .close')
let previousScrollPosition = window.scrollY

// Load all project data + assign to projectData variable to be used anywhere onsite
async function getProjectData() {
  let response = await fetch('./assets/data.json')
  let data     = await response.json()
  projectData  = data
}
getProjectData()

// Handle navigation display on scroll
function hideShowHeroNavigation() {
  let currentScrollPosition = window.scrollY

  // IF previous position is great than current position > hide navigation
  // ELSE show navigation
  if (previousScrollPosition > currentScrollPosition) {
    mainNavigation.classList.remove('show')
  } else {
    mainNavigation.classList.add('show')
  }

  previousScrollPosition = currentScrollPosition
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

// Hide or show promo reel
function hideShowPromoReelContainer() {
  promoReelContainer.classList.toggle('active')
}

// Open project modal popup with info about project clicked
function openProjectModal() {
  // modal selectors
  const modalGif     = document.querySelector('.modal-gif--js')
  const modalClient  = document.querySelector('.modal-client--js')
  const modalProject = document.querySelector('.modal-project--js')
  const modalDate    = document.querySelector('.modal-date--js')

  // get project id to be used for data fetching
  const projectId = this.getAttribute('data-project-id')

  // show project modal
  projectModal.classList.toggle('active')

  // update project gif, client, project + date
  modalGif.setAttribute('src', projectData[projectId].gif)
  modalGif.setAttribute('alt', `${projectData[projectId].client}, ${projectData[projectId].project}`)
  modalClient.innerHTML  = projectData[projectId].client
  modalProject.innerHTML = `<span class="modal-label">Project:</span> ${projectData[projectId].project}`
  modalDate.innerHTML    = `<span class="modal-label">Description:</span> ${projectData[projectId].description}`
}

// Open project modal popup
function closeProjectModal() {
  projectModal.classList.toggle('active')
}

// Window resize > hide mobile navigation on desktop
window.addEventListener('resize', hideMobileNavOnDesktop)

// User scrolls > hide or show main hero navigation
document.addEventListener('scroll', hideShowHeroNavigation)

// Mobile > user clicks hambruger menu > toggle menu open
hamburgerMenu.addEventListener('click', toggleHamburgerMenu)

// User clicks "watch reel" > open promo reel container
watchPromoReelCTA.addEventListener('click', hideShowPromoReelContainer)

// User clicks video modal close icon > close promo reel container
promoReelCloseIcon.addEventListener('click', hideShowPromoReelContainer)

// Mobile > user clicks hamburger menu > toggle menu open
mobileNavItems.forEach((item) => item.addEventListener('click', toggleHamburgerMenu))

// User clicks project > open modal with more information
projectContainer.forEach((project, index) => {
  project.setAttribute('data-project-id', index)
  project.addEventListener('click', openProjectModal)
})

// Close project modal popup
projectModalClose.addEventListener('click', closeProjectModal)
