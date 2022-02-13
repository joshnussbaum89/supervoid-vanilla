// Mobile > toggle navigation menu
function toggleHamburgerMenu() {
  this.classList.toggle('is-active')
}

// Smooth scroll to specifc location on page
function smoothScroll(location, duration) {
  $('html, body').animate(
    { scrollTop: $(location).offset().top - 100 },
    duration
  )
}

// Scroll to portfolio
function scrollToPortfolio() {
  $(this).on('click', function () {
    smoothScroll('#portfolio', 200)
  })
}

// User clicks portfolio CTA > navigate to #portfolio section
$('.portfolio-cta--js').each(scrollToPortfolio)

// Mobile > user clicks hambruger menu > toggle menu open
$('.hamburger').on('click', toggleHamburgerMenu)
