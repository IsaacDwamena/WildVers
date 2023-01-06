// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: false,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    100: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

// mobile menu

const List = document.querySelector(".list");
const mobileToggle = document.querySelector(".mobile-toggle");

mobileToggle.addEventListener("click", () => {
  List.classList.toggle("active");
  mobileToggle.classList.toggle("active");
});

document.querySelectorAll(".list").forEach((n) =>
  n.addEventListener("click", () => {
    List.classList.remove("active");
    mobileToggle.classList.remove("active");
  })
);

// Animations

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: "power2.out",
  duration: 0.75,
});

// Home
gsap.fromTo(
  ".showcase",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".home",
      toggleActions: "restart none restart none",
    },
  }
);

gsap.fromTo(
  ".socials",
  { opacity: 0, y: 800 },
  {
    opacity: 1,
    y: 0,
    ease: "slow(0.7, 0.4, false)",
    duration: 1,
    scrollTrigger: {
      trigger: ".home",
      toggleActions: "restart none restart none",
    },
  }
);

// Order
gsap.fromTo(
  ".anim-1",
  { opacity: 0, x: -500 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".step-1",
      toggleActions: "restart none restart none",
    },
  }
);
gsap.fromTo(
  ".anim-2",
  { opacity: 0, x: 500 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".step-1",
      toggleActions: "restart none restart none",
    },
  }
);
gsap.fromTo(
  ".anim-3",
  { opacity: 0, x: -500 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".step-2",
      toggleActions: "restart none restart none",
    },
  }
);
gsap.fromTo(
  ".anim-4",
  { opacity: 0, x: 500 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".step-2",
      toggleActions: "restart none restart none",
    },
  }
);
gsap.fromTo(
  ".anim-5",
  { opacity: 0, x: -500 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".step-3",
      toggleActions: "restart none restart none",
    },
  }
);
gsap.fromTo(
  ".anim-6",
  { opacity: 0, x: 500 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".step-3",
      toggleActions: "restart none restart none",
    },
  }
);

// Explore
gsap.fromTo(
  ".explore-title",
  { opacity: 0, x: 200 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".explore",
      toggleActions: "restart none restart none",
    },
  }
);
gsap.fromTo(
  ".explore-para",
  { opacity: 0, x: -200 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".explore",
      toggleActions: "restart none restart none",
    },
  }
);

// Choose
gsap.fromTo(
  ".choose",
  { opacity: 0, y: 500 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".choose",
      toggleActions: "restart none restart none",
    },
  }
);

// Book
gsap.fromTo(
  ".book-info",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".book",
      toggleActions: "restart none restart none",
    },
  }
);

// Gallery
gsap.fromTo(
  ".gallery-info",
  { opacity: 0, x: -500 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".gallery",
      toggleActions: "restart none restart none",
    },
  }
);
