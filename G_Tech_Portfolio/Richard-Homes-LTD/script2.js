// Navigation behaviour
// CLICK TO OPEN A MOBILE MENU
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

// CLOSE MOBILE MENU AFTER CLICKING A LINK
const navItem = document.querySelectorAll("#navLinks a");
  navItem.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  const isOpen = navLinks.classList.contains("active");
  menuBtn.setAttribute("aria-expanded", isOpen);
})