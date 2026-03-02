document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
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

const menuToggle = document.querySelector('.menu-toggle');
const headerInner = document.querySelector('.header-inner');

menuToggle?.addEventListener('click', () => {
  headerInner?.classList.toggle('is-open');
});