const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav-link")
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

navLinks.forEach(item => {
    item.addEventListener('click', () => {
        navbar.classList.remove("showNav");
    });
});