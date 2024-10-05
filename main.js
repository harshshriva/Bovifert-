/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollup = ()=> {
  const scrollupBtn = document.getElementById("scroll-up")

  if (this.scrollY >=250) {
    scrollupBtn.classList.remove(".bottom-1/2")
    scrollupBtn.classList.add("bottom-4")
  }else {
    scrollupBtn.classList.add(".bottom-1/2")
    scrollupBtn.classList.remove("bottom-4")

  }
}

window.addEventListener("scroll", scrollup)

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = ()=> {
  const header = document.getElementById("navbar")

  if (this.scrollY >=50) {
    header.classList.add("border-b", "border-yellow-500")
  }else {
    header.classList.remove("border-b", "border-yellow-500")
  }
}

window.addEventListener("scroll", scrollHeader)

/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640:{
        slidesPreview: 1
    },
    768:{
        slidesPreview: 2
    },
    1024:{
        slidesPreview: 3
    }
  }
});

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll(".nav-link")

  let current = 'home'

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if(this.scrollY >= sectionTop - 60){
      current = section.getAttribute("id")
    }
  })

  sections.forEach(item => {
   item.classList.remove('active')
   if(item.href.includes(current)) {
    item.classList.add("active")
   }
  })
}

window.addEventListener("scroll", activeLink)

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
  origin:"top",
  distance: "60px",
  duration:2500,
  delay: 300,
  reset: true
})

sr.reveal('.home__data, .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .copy__right')
sr.reveal('.home__image', {delay:500, scale:0.5})

sr.reveal('.service_card, .popular__card', {interval: 100})

sr.reveal('.about__leaf', {delay:1000, origin: "right"})
sr.reveal('.about__item__1-content, about__item__2-img', {origin: "right"})
sr.reveal('.about__item__2-content, about__item__1-img', {origin: "left"})


sr.reveal('.review__leaf, footer__floral', {delay:1000, origin: "left"})

/*~~~~~~~~~~~~~~~ ORDER POPOUP ~~~~~~~~~~~~~~~*/
// Open the form popup
document.querySelectorAll('.bg-yellow-500').forEach(button => {
  button.addEventListener('click', (event) => {
    // Get the product name from the card
    const card = event.target.closest('.popular__card');
    const productName = card.querySelector('h3').innerText;

    // Set the product name in the label inside the popup form
    document.getElementById('productLabel').innerText = `Product Name: ${productName}`;

    // Show the popup form
    document.getElementById('popupForm').classList.remove('hidden');
  });
});

// Close the form popup
document.getElementById('cancelBtn').addEventListener('click', () => {
  document.getElementById('popupForm').classList.add('hidden');
});

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const productName = document.getElementById('productLabel').innerText.replace('Product Name: ', '');

  const formData = {
    name: document.getElementById('name').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    pin: document.getElementById('pin').value,
    phone: document.getElementById('phone').value,
    productName,
  };

  // Send data to backend API
  await fetch('https://harshshriva.github.io/Bovifert-/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  // Close the form popup
  document.getElementById('popupForm').classList.add('hidden');

  // Show the success card
  document.getElementById('successCard').classList.remove('hidden');
});

// Close the success card
document.getElementById('closeSuccessBtn').addEventListener('click', () => {
  document.getElementById('successCard').classList.add('hidden');
});

