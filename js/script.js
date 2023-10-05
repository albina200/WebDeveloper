let hamburger = document.querySelector(".hamburger");
let NavLinks = document.querySelector(".nav__links");
let NavAllLinks = document.querySelectorAll("nav a");

let form = document.querySelector("form");
let iframe = document.querySelector("iframe");
let wrapper = document.querySelector(".wrapper");


hamburger.onclick = function () {
    hamburger.classList.toggle('hamburger_active');
    NavLinks.classList.toggle('nav-links_active');
}

for (let i = 0; i < 5; i++) {
    NavAllLinks[i].onclick = function () {
        NavLinks.classList.remove("nav-links_active");
        hamburger.classList.remove("hamburger_active");
    }
}

iframe.onload = function () {
  wrapper.classList.add("_active");
  setTimeout(() => {
      form.reset();
      wrapper.classList.remove("_active");
  }, 2000);
}
