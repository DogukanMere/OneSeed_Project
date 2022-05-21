//DOM//
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const contactSubmit = document.querySelector(".contact__submit");
const divForm = document.querySelector(".confirm__flex");
const confirmMsg = document.querySelector(".confirm__message");

// Hamburger Menu Items
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});

// Hamburger Menu Icon
hamburger.addEventListener("click", toggleMenu);

// Function
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

// Form Send Function
contactSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  divForm.classList.add("contact__animation");
  divForm.classList.add("not_clickable");
  confirmMsg.classList.add("contact__animation_show");
});
