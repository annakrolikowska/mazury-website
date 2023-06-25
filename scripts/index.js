// scroll navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const header = document.getElementById('header');
    const stickyThreshold = header.offsetTop + 250;

    if (window.pageYOffset >= stickyThreshold) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// fade in function
const elements = document.querySelectorAll('.fade-in');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const elementHeight = element.offsetHeight;
  const elementWidth = element.offsetWidth;

  const threeQuarterViewportHeight = (3 / 4) * viewportHeight;
  const threeQuarterViewportWidth = (3 / 4) * viewportWidth;
  const elementTop = rect.top + elementHeight;
  const elementLeft = rect.left + elementWidth;

  return (
    elementTop >= threeQuarterViewportHeight &&
    elementLeft >= threeQuarterViewportWidth &&
    rect.top <= viewportHeight &&
    rect.left <= viewportWidth
  );
}

function handleScroll() {
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

// slider
let glide = null; 

function initGlide() {
  const mediaQuery = window.matchMedia("(max-width: 767px)");
  const perView = mediaQuery.matches ? 1 : 3;

  if (glide) {
    glide.destroy();
  }

  glide = new Glide(".images", {
    type: 'carousel',
    perView: perView
  });

  glide.mount();
}

initGlide();
window.addEventListener("resize", initGlide);

new Glide(".equipment", {type: 'carousel', perView: 1, keyboard: false}).mount()

// more informations 
const collapsibleElements = document.getElementsByClassName("information__collapsible");

function toggleCollapsible() {
  this.classList.toggle("active");
  const content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

// Schowaj sekcje na początku
for (let i = 0; i < collapsibleElements.length; i++) {
  const content = collapsibleElements[i].nextElementSibling;
  content.style.display = "none";
  
  collapsibleElements[i].addEventListener("click", toggleCollapsible);
}