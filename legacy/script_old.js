// Year Auto detect
document.getElementById("year").textContent = new Date().getFullYear();

/* -------------------------
  * Responsive Toggle Menu Script
------------------------- */
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

/* -------------------------
  * Email Send script
------------------------- */
const EMAILJS_PUBLIC_KEY = "_zaPKtVyBE8T5Q5l9";
const EMAILJS_SERVICE_ID = "service_g5c0tlz";
const EMAILJS_TEMPLATE_ID = "template_i9cz6sb";

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

/* -------------------------
  * Dark Mode Toggle Script
------------------------- */
const toggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);
toggle.innerHTML =
  currentTheme === "light"
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';

toggle.addEventListener("click", () => {
  const theme =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "dark"
      : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggle.innerHTML =
    theme === "light"
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
});

/* -------------------------
  * CV Download Script
------------------------- */
try {
  const cvButton = document.getElementById("cv");

  if (cvButton) {
    cvButton.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "cv/Shaoun_Chandra_Shill.pdf";
      link.download = "Shaoun_Chandra_Shill_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
} catch (error) {
  console.error("❌ Error in CV download script:", error.message);
}
