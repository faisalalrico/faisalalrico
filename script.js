// Faisal Alrico CV Web
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const topBtn = document.getElementById("topBtn");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  navMenu?.classList.toggle("is-open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("is-open");
  });
});

window.addEventListener("scroll", () => {
  if (!topBtn) return;
  topBtn.classList.toggle("is-visible", window.scrollY > 600);
});

topBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-in"));
}
