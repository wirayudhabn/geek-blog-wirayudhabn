const mobileMenuIcon = document.getElementById("mobileMenu");
const menuNav = document.querySelector(".header-container nav");

mobileMenuIcon.addEventListener("click", function () {
  menuNav.classList.toggle("mobile");
});
