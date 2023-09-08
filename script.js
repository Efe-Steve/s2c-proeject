var hamB = document.querySelector(".hamburger");
var firstSpan = document.querySelector(".first-span");
var secSpan = document.querySelector(".second-span");
var sideBar = document.querySelector(".bright");

hamB.addEventListener("click", () => {
    hamB.classList.toggle("active")
    sideBar.classList.toggle("show")
}) 