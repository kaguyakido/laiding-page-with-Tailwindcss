const menuElementsTotoggle = document.querySelectorAll(".toggle-menu");
const iconeToogle = document.querySelector(".icone-toggle");
console.log("menuElementsTotoggle");

const toggleMenu = () => menuElementsTotoggle.forEach(el => el.classList.toggle("hidden"));
iconeToogle.addEventListener("click", toggleMenu);