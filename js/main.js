// NEWS SECTION
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

// SMARTPHONE MENU

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

// CLOSE MENU WHEN CLICK LINK
const menuLinks = document.querySelectorAll(".sp-menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    document.body.classList.remove("menu-open");
    headerSp.classList.remove("menu-open");
  });
});

// Back to TOP button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// ANIMATION
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        setTimeout(() => {
          entry.target.classList.add("finished");
        }, 1000); // sau khi animation xong
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
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

/* ===== FIX ANIMATION WHEN ROTATE MOBILE ===== */
let resizeTimer;

window.addEventListener("resize", () => {
  document.body.classList.add("resize-stop");

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-stop");
  }, 300);
});

// HERO PC ANIMATIOn
const bg1 = document.querySelector(".hero-bg-1");
const bg2 = document.querySelector(".hero-bg-2");

let showingFirst = true;

setInterval(() => {
  if (showingFirst) {
    bg2.classList.add("show");
    bg1.classList.remove("show");
  } else {
    bg1.classList.add("show");
    bg2.classList.remove("show");
  }

  showingFirst = !showingFirst;
}, 3000);



/* ===== HERO SP BACKGROUND FADE ===== */

window.addEventListener("load", () => {
  const bg1 = document.querySelector(".hero-sp-bg-1");
  const bg2 = document.querySelector(".hero-sp-bg-2");

  if (!bg1 || !bg2) return;

  let showingFirst = true;

  setInterval(() => {
    if (showingFirst) {
      bg1.style.opacity = "0";
      bg2.style.opacity = "1";
    } else {
      bg1.style.opacity = "1";
      bg2.style.opacity = "0";
    }

    showingFirst = !showingFirst;
  }, 3000);
});



