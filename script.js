const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector(".contact-form");
const statusMessage = document.querySelector(".form-status");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
  header.classList.toggle("is-open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  statusMessage.textContent =
    "Votre demande est prete pour la maquette. Le formulaire pourra etre branche ensuite.";
  form.reset();
});
