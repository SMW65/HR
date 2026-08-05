const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const toast = document.getElementById("placeholder-toast");
let toastTimer;

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (!toast) return;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3800);
  });
});

const year = document.getElementById("current-year");
if (year) {
  year.textContent = new Date().toLocaleDateString("th-TH", { year: "numeric" });
}
