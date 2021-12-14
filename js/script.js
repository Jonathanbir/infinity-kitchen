let menu = document.querySelector("#menu-bars");
let navigation = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navigation.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

// function loader() {
//   document.querySelector(".loader-container").classList.add("fade-out");
// }

// function fadeOut() {
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut;
