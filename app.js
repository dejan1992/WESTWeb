const nav = document.querySelector("header");
let scrolled = false;
window.onscroll = function () {
  if (window.pageYOffset > 1) {
    console.log(1);
    nav.style.backgroundColor = "rgb(220, 220, 220)";
  } else {
    nav.style.backgroundColor = "rgb(245, 245, 245)";
  }
}