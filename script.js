// Year Auto detect
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle Script
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav_menu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  menu.classList.add("open");
  menuToggle.setAttribute("aria-expanded", "true");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

// Email Send script
const EMAILJS_PUBLIC_KEY = "P0SBhvT-Hf90cDARx";
const EMAILJS_SERVICE_ID = "service_kldllhc";
const EMAILJS_TEMPLATE_ID = "template_1pwzrtt";

emailjs.init(EMAILJS_PUBLIC_KEY);

const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;

  emailjs
    .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, "#contactForm")
    .then(() => {
      form.reset();
      toast.style.display = "block";
      setTimeout(() => (toast.style.display = "none"), 3000);
    })
    .catch((err) => {
      alert("Failed to send message: " + JSON.stringify(err));
    })
    .finally(() => {
      btn.disabled = false;
    });
});
