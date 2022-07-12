// selectors
const hamburger = document.querySelector(".navbar-toggler");
const close = document.querySelector(".close");
const sideBar = document.querySelector(".side");
const overlay = document.querySelector(".overlay");

// event listeners

hamburger.addEventListener("click", function () {
  sideBar.style.display = "block";
  overlay.style.display = "block";
});
close.addEventListener("click", function () {
  sideBar.style.display = "none";
  overlay.style.display = "none";
});
