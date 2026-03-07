document.querySelector(".scroll-indicator")?.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const firstNews = document.querySelector(".news-item");
  const heroNotice = document.querySelector(".hero-notice p");

  if (firstNews && heroNotice) {
    const date = firstNews.querySelector(".news-date")?.textContent || "";
    const text = firstNews.querySelector(".news-text")?.textContent || "";

    heroNotice.textContent = `${date}　${text}`;
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const headerInner = document.querySelector(".header-inner");

menuToggle?.addEventListener("click", () => {
  headerInner?.classList.toggle("is-open");
});

const menuBtn = document.querySelector(".menu-toggle-sp");
const menu = document.querySelector(".sp-menu");
const headerSp = document.querySelector(".header-sp");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  document.body.classList.toggle("menu-open");
  headerSp.classList.toggle("menu-open");
});

// Animation
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//   });
// }, { threshold: 0.2 });

// document.querySelectorAll(".fade-up").forEach(el => {
//   observer.observe(el);
// });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

document
  .querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .fade-in, .spec-image, .spec-content, .cta-consult, .test-video",
  )
  .forEach((el) => observer.observe(el));

window.addEventListener("load", () => {
  document.body.classList.add("hero-loaded");
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

